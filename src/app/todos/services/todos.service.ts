import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define el tipo de dato para una tarea
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    // Retorna un 'Observable' que emitirá la lista de tareas
    return this.http.get<Todo[]>(this.apiUrl);
  }

  addTodo(newTodo: Todo): Observable<Todo> {
    // Envía una nueva tarea a la API (en este caso, una API de ejemplo)
    return this.http.post<Todo>(this.apiUrl, newTodo);
  }
}