import { Component, OnInit } from '@angular/core';
import { CategoryDTO } from '../../interfaces/CategoryDTO';
import { MovementAssociationDTO } from '../../interfaces/MovementAssociationDTO';
import { AssociationService } from '../../services/association-service';
import { CategoryService } from '../../services/category-service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories implements OnInit {

  private _categories = new BehaviorSubject<CategoryDTO[]>([]);
  categories$ = this._categories.asObservable();
  private _associations = new BehaviorSubject<MovementAssociationDTO[]>([]);
  associations$ = this._associations.asObservable();

  // Objetos para los formularios
  newCategory: CategoryDTO = { categoryName: '', categoryType: 'EXPENSE' };
  newAssociation: MovementAssociationDTO = { associationWord: '', categoryId: 0 };

  constructor(
    private categoryService: CategoryService,
    private associationService: AssociationService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    console.log('Cargando categorías y asociaciones...');
    this.categoryService.getAll().subscribe({
      next: (data) => {
        this._categories.next(data);
      },
      error: (err) => {
        console.error('Error al cargar categorías:', err);
      }
    });
    this.associationService.getAll().subscribe({
      next: (data) => {
        this._associations.next(data);
      },
      error: (err) => {
        console.error('Error al cargar asociaciones:', err);
      }
    });
  }

  saveCategory() {
    if (!this.newCategory.categoryName) return;
    this.categoryService.create(this.newCategory).subscribe(() => {
      this.loadData();
      this.newCategory = { categoryName: '', categoryType: 'EXPENSE' };
      // Cerrar modal (hack simple de DaisyUI usando checkbox)
      (document.getElementById('modal-category') as HTMLInputElement).checked = false;
    });
  }

  saveAssociation() {
    if (!this.newAssociation.associationWord || !this.newAssociation.categoryId) return;
    this.associationService.create(this.newAssociation).subscribe(() => {
      this.loadData();
      this.newAssociation = { associationWord: '', categoryId: 0 };
      (document.getElementById('modal-association') as HTMLInputElement).checked = false;
    });
  }

  deleteCategory(id: number | undefined) {
    if (id && confirm('¿Estás seguro? Se borrarán las asociaciones vinculadas.')) {
      this.categoryService.delete(id).subscribe(() => this.loadData());
    }
  }

  deleteAssociation(id: number | undefined) {
    if (id) {
      this.associationService.delete(id).subscribe(() => this.loadData());
    }
  }
}