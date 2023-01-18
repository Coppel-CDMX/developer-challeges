from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework import viewsets, permissions, status
from rest_framework.authentication import TokenAuthentication, SessionAuthentication, BasicAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.decorators import action, api_view
from rest_framework.response import Response

from todo.models import Task
from todo.serializers import TaskSerializer


# Create your views here.

class TaskViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [BasicAuthentication, SessionAuthentication, TokenAuthentication, ]

    def get_queryset(self):
        queryset = super(TaskViewSet, self).get_queryset()
        return queryset.filter(
            done=False,
            owner=self.request.user,
        )

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    @action(detail=True, methods=['post'], name='Mark done')
    def done(self, request, pk=None):
        task = self.get_object()
        task.done = True
        task.save()
        return Response({'status': 'Done'}, status=status.HTTP_200_OK)


@api_view(['POST'])
def get_token(request):
    data = request.data
    email = data['client_obj']['user']['email']
    user, _ = User.objects.get_or_create(email=email, defaults={'username': email})
    token, _ = Token.objects.get_or_create(user=user)
    return Response({"token": token.key})
