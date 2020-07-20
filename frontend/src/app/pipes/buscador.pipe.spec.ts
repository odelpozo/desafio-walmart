import { BuscadorPipe } from './buscador.pipe';

describe('BuscadorPipe', () => {
  it('create an instance', () => {
    const pipe = new BuscadorPipe();
    expect(pipe).toBeTruthy();
  });

  it('should exit when an empty search ', () => {
  
    const pipe = new BuscadorPipe();
    let item = {};
    const result = pipe.transform(item,"");
    expect(result).toEqual(item);

  });

  it('should return palindrome phrase', () => {

    const pipe = new BuscadorPipe();
    const result = pipe.validaPalindromo({brand:"ana"});

    expect(result.brand).toEqual("ana");

  });

  it('should identify when the numeric search value', () => {

    const pipe = new BuscadorPipe();
    let item = [{id:1,brand: "MyBrand", description: "MyDescription"}];
    const result = pipe.transform(item,"1");
    expect(result).toEqual(jasmine.arrayContaining(item));
  });

  it('should identify when the string search value', () => {

    const pipe = new BuscadorPipe();
    let item = [{id:1,brand: "MyBrand", description: "MyDescription"}];
    const result = pipe.transform(item,"MyBrand");
    expect(result).toEqual(item);

  });

});
