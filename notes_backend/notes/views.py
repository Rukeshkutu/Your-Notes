from django.shortcuts import render, get_object_or_404
from .serializers import NoteSerializer
from .models import Note
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
# Create your views here.

@api_view(["GET", "POST"])
def notes(request):
    if request.method == "GET":
        notes = Note.objects.all().order_by('-created_at')
        serializer = NoteSerializer(notes, many = True)
        return Response({
            'stauts': 'success',
            'count': notes.count(),
            'data':serializer.data
        })

    elif request.method == "POST":
        serializer = NoteSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'stauts': 'success',
                'data':serializer.data
            }, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def note_detail(request, slug):
    try:
        note = get_object_or_404(Note, slug = slug)
    except Note.DoesNotExit:
        return Response(staus = status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = NoteSerializer(note)
        return Response({
            'status': 'success',
            'data': serializer.data
        })
    elif request.method == 'PUT':
        serializer = NoteSerializer(note, data = request.data, partial = True)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'status': 'success',
                'serializer': serializer.data
            }, status=status.HTTP_200_OK)
        return Response({
            'stuatus': 'error',
            'errors':serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        note.delete()
        return Response({
            'status': 'success',
            'message': 'Note delete successfully'
        }, status=status.HTTP_204_NO_CONTENT)