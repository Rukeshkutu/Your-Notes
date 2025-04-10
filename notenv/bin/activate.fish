# This file must be used with "source <venv>/bin/activate.fish" *from fish*
# (https://fishshell.com/). You cannot run it directly.

function deactivate  -d "Exit virtual environment and return to normal shell environment"
    # reset old environment variables
    if test -n "$_OLD_VIRTUAL_PATH"
        set -gx PATH $_OLD_VIRTUAL_PATH
        set -e _OLD_VIRTUAL_PATH
    end
    if test -n "$_OLD_VIRTUAL_PYTHONHOME"
        set -gx PYTHONHOME $_OLD_VIRTUAL_PYTHONHOME
        set -e _OLD_VIRTUAL_PYTHONHOME
    end

    if test -n "$_OLD_FISH_PROMPT_OVERRIDE"
        set -e _OLD_FISH_PROMPT_OVERRIDE
        # prevents error when using nested fish instances (Issue #93858)
        if functions -q _old_fish_prompt
            functions -e fish_prompt
            functions -c _old_fish_prompt fish_prompt
            functions -e _old_fish_prompt
        end
    end

    set -e VIRTUAL_ENV
    set -e VIRTUAL_ENV_PROMPT
    if test "$argv[1]" != "nondestructive"
        # Self-destruct!
        functions -e deactivate
    end
end

# Unset irrelevant variables.
deactivate nondestructive

set -gx VIRTUAL_ENV "/Users/Apple 1/Desktop/All_Project /project_note/notenv"

set -gx _OLD_VIRTUAL_PATH $PATH
set -gx PATH "$VIRTUAL_ENV/bin" $PATH

# Unset PYTHONHOME if set.
if set -q PYTHONHOME
    set -gx _OLD_VIRTUAL_PYTHONHOME $PYTHONHOME
    set -e PYTHONHOME
end

if test -z "$VIRTUAL_ENV_DISABLE_PROMPT"
    # fish uses a function instead of an env var to generate the prompt.

    # Save the current fish_prompt function as the function _old_fish_prompt.
    functions -c fish_prompt _old_fish_prompt

    # With the original prompt function renamed, we can override with our own.
    function fish_prompt
        # Save the return status of the last command.
        set -l old_status $status

        # Output the venv prompt; color taken from the blue of the Python logo.
        printf "%s%s%s" (set_color 4B8BBE) "(notenv) " (set_color normal)

        # Restore the return status of the previous command.
        echo "exit $old_status" | .
        # Output the original/"old" prompt.
        _old_fish_prompt
    end

    set -gx _OLD_FISH_PROMPT_OVERRIDE "$VIRTUAL_ENV"
    set -gx VIRTUAL_ENV_PROMPT "(notenv) "
end

# disable nodeenv's prompt
# (prompt already changed by original virtualenv's script)
# https://github.com/ekalinin/nodeenv/issues/26
set NODE_VIRTUAL_ENV_DISABLE_PROMPT 1


# This file must be used with "source bin/activate.fish" *from fish*
# you cannot run it directly

function deactivate_node -d 'Exit nodeenv and return to normal environment.'
    # reset old environment variables
    if test -n "$_OLD_NODE_VIRTUAL_PATH"
        set -gx PATH $_OLD_NODE_VIRTUAL_PATH
        set -e _OLD_NODE_VIRTUAL_PATH
    end

    if test -n "$_OLD_NODE_PATH"
        set -gx NODE_PATH $_OLD_NODE_PATH
        set -e _OLD_NODE_PATH
    else
        set -e NODE_PATH
    end

    if test -n "$_OLD_NPM_CONFIG_PREFIX"
        set -gx NPM_CONFIG_PREFIX $_OLD_NPM_CONFIG_PREFIX
        set -e _OLD_NPM_CONFIG_PREFIX
    else
        set -e NPM_CONFIG_PREFIX
    end

    if test -n "$_OLD_npm_config_prefix"
        set -gx npm_config_prefix $_OLD_npm_config_prefix
        set -e _OLD_npm_config_prefix
    else
        set -e npm_config_prefix
    end

    if test -n "$_OLD_NODE_FISH_PROMPT_OVERRIDE"
        # Set an empty local `$fish_function_path` to allow the removal of
        # `fish_prompt` using `functions -e`.
        set -l fish_function_path

        # Prevents error when using nested fish instances
        if functions -q _node_old_fish_prompt
            # Erase virtualenv's `fish_prompt` and restore the original.
            functions -e fish_prompt
            functions -c _node_old_fish_prompt fish_prompt
            functions -e _node_old_fish_prompt
        end
        set -e _OLD_NODE_FISH_PROMPT_OVERRIDE
    end

    set -e NODE_VIRTUAL_ENV

    if test (count $argv) = 0 -o "$argv[1]" != "nondestructive"
        # Self destruct!
        functions -e deactivate_node
    end
end

function freeze -d 'Show a list of installed packages - like `pip freeze`'
    set -l NPM_VER (npm -v | cut -d '.' -f 1)
    set -l RE "[a-zA-Z0-9\.\-]+@[0-9]+\.[0-9]+\.[0-9]+([\+\-][a-zA-Z0-9\.\-]+)*"

    if test "$NPM_VER" = "0"
        set -g NPM_LIST (npm list installed active >/dev/null ^/dev/null |                          cut -d ' ' -f 1 | grep -v npm)
    else
        set -l NPM_LS "npm ls -g"
        if test (count $argv) -gt 0 -a "$argv[1]" = "-l"
            set NPM_LS "npm ls"
            set -e argv[1]
        end
        set -l NPM_LIST (eval $NPM_LS | grep -E '^.{4}\w{1}' |                                         grep -o -E "$re" |                                         grep -v npm)
    end

    if test (count $argv) = 0
        echo $NPM_LIST
    else
        echo $NPM_LIST > $argv[1]
    end
end

# unset irrelevant variables
deactivate_node nondestructive

# find the directory of this script
begin
    set -l SOURCE (status filename)
    while test -L "$SOURCE"
        set SOURCE (readlink "$SOURCE")
    end
    set -l DIR (dirname (realpath "$SOURCE"))

    # NODE_VIRTUAL_ENV is the parent of the directory where this script is
    set -gx NODE_VIRTUAL_ENV (dirname "$DIR")
end

set -gx _OLD_NODE_VIRTUAL_PATH $PATH
# The node_modules/.bin path doesn't exists and it will print a warning, and
# that's why we redirect stderr to /dev/null :)
set -gx PATH "$NODE_VIRTUAL_ENV/lib/node_modules/.bin" "$NODE_VIRTUAL_ENV/bin" $PATH ^/dev/null

if set -q NODE_PATH
    set -gx _OLD_NODE_PATH $NODE_PATH
    set -gx NODE_PATH "$NODE_VIRTUAL_ENV/lib/node_modules" $NODE_PATH
else
    set -gx NODE_PATH "$NODE_VIRTUAL_ENV/lib/node_modules"
end

if set -q NPM_CONFIG_PREFIX
    set -gx _OLD_NPM_CONFIG_PREFIX $NPM_CONFIG_PREFIX
end
set -gx NPM_CONFIG_PREFIX "$NODE_VIRTUAL_ENV"

if set -q npm_config_prefix
    set -gx _OLD_npm_config_prefix $npm_config_prefix
end
set -gx npm_config_prefix "$NODE_VIRTUAL_ENV"

if test -z "$NODE_VIRTUAL_ENV_DISABLE_PROMPT"
    # Copy the current `fish_prompt` function as `_node_old_fish_prompt`.
    functions -c fish_prompt _node_old_fish_prompt

    function fish_prompt
        # Save the current $status, for fish_prompts that display it.
        set -l old_status $status

        # Prompt override provided?
        # If not, just prepend the environment name.
        if test -n "(notenv)"
            printf '%s%s ' "(notenv)" (set_color normal)
        else
            printf '%s(%s) ' (set_color normal) (basename "$NODE_VIRTUAL_ENV")
        end

        # Restore the original $status
        echo "exit $old_status" | source
        _node_old_fish_prompt
    end

    set -gx _OLD_NODE_FISH_PROMPT_OVERRIDE "$NODE_VIRTUAL_ENV"
end

set -e NODE_VIRTUAL_ENV_DISABLE_PROMPT
