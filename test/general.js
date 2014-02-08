var assert = require('assert');
var teste = require(__dirname + '/../');

describe('Testes gerais de estrutura', function(){
    describe('Verificando métodos', function(){
        it('Precisa ter o método #hello', function(){
            assert.equal(typeof teste.hello, 'function');
        });

        it('Precisa ter o método #world', function(){
            assert.equal(typeof teste.world, 'function');
        });
    });

    describe('Output dos métodos', function(){
        it('#hello precisa ser \'helloworld\'', function(){
            assert.equal(teste.hello(), 'helloworld');
        });

        it('#world precisa ser \'worldworld\'', function(){
            assert.equal(teste.world(), 'worldworld');
        });
    });
});
