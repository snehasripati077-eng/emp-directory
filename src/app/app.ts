import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  employees = [
    {
      id: 101,
      name: 'Rahul Sharma',
      department: 'IT'
    },
    {
      id: 102,
      name: 'Priya Das',
      department: 'HR'
    },
    {
      id: 103,
      name: 'Amit Kumar',
      department: 'Finance'
    }
  ];

  clearEmployees() {
    this.employees = [];
  }

  loadEmployees() {
    this.employees = [
      {
        id: 101,
        name: 'Rahul Sharma',
        department: 'IT'
      },
      {
        id: 102,
        name: 'Priya Das',
        department: 'HR'
      },
      {
        id: 103,
        name: 'Amit Kumar',
        department: 'Finance'
      }
    ];
  }
}