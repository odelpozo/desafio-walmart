import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductosService } from './productos.service';
import { environment } from "../../environments/environment";

describe('ProductosService', () => {

  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [ProductosService]
  });
  httpMock = TestBed.get(HttpTestingController);   
 });

  
 

  it('should be created', () => {
    const service: ProductosService = TestBed.get(ProductosService);
    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
    const service: ProductosService = TestBed.get(ProductosService);
    expect(service.get).toBeTruthy();
  });

  it('should return an observable prodcutos', () => {
    const service: ProductosService = TestBed.get(ProductosService);
    const dumyProductos = [{id:0,brand: 'MyGrand', description: 'MyDescription', image:'MyImage', price: 0}];
    
    service.get('products').subscribe( prods => {
      expect(prods).toEqual(dumyProductos);
    })

    const resp = httpMock.expectOne(environment.apiUrl+'products');
    expect(resp.request.method).toBe('GET');
    resp.flush(dumyProductos);

   });


});
