import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from './services/todos.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  standalone: true, // Si usas componentes standalone, no necesitas el modulo app.module.ts
  imports: [CommonModule, HttpClientModule],
  templateUrl: './todos.html',
  styleUrl: './todos.css'
})
export class Todos implements OnInit {
  todos: Todo[] = []; //Definimos una propiedad para almacenar la lista de tareas.

  errorMessage: string | null = null;

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.obtenerTodos(); //funcion de component

  }

  obtenerTodos() {
    this.todosService.getTodos().subscribe({
      next: (data) => {
        // 2. Cuando los datos llegan, los asignamos
        this.todos = data;
        this.errorMessage = null; // Limpiamos cualquier error anterior
      },
      error: (error) => {
        // 3. Manejo de errores si la petición falla
        console.error('Hubo un error al obtener las tareas:', error);
        this.errorMessage = 'No se pudieron cargar las tareas. Inténtalo de nuevo más tarde.';
      }

    })
  }

}
