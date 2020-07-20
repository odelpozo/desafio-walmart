import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductoComponent } from './producto.component';
import { ProductosService } from "../../services/productos.service";
import { throwError, of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { BuscadorPipe } from "../../pipes/buscador.pipe";
import { Producto } from "../../models/Producto";

describe('ProductoComponent', () => {
  let component: ProductoComponent;
  let fixture: ComponentFixture<ProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule], 
      declarations: [ ProductoComponent ,BuscadorPipe],
      providers: [ProductosService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When ngOnInit() is called',() => {

    it ('should handle error', () => {
      spyOn(component.productosService, 'get').and.returnValue(throwError({error: 'error'}));
      component.ngOnInit();
      expect(component.isError).toBeTruthy();
    })

    it ('should not handle error', () => {
      spyOn(component.productosService, 'get').and.returnValue(of({ productos:[]}));
      component.ngOnInit();
      expect(component.isError).toBeFalsy();
    })
  })


  describe('When get() is called',() => {
    it ('should be fine all', () => {
      const productos : Producto[] = [{ id: 1, brand: "", description: "", image: "",price: 0 }]; 
      spyOn(component.productosService, 'get').and.returnValue(of({ productos }));
      component.ngOnInit();
      expect(component.isError).toBeFalsy(); 
      // expect(component.productos).toBe(productos);
    })

  })



});
