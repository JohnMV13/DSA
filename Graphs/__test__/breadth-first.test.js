'use strict';

const Graph = require('../lib/breadth-first');
const bft = require('../../Tree/lib/bft');

describe('Graph', ()=>{
  
  it('can add a vertex', ()=>{
    let graph = new Graph();
    graph.addVertex('n');
    expect(graph.vertices[0]).toBe('n');
    graph.addVertex('m');
    expect(graph.vertices[1]).toBe('m');
    graph.addVertex('a');
    graph.addVertex('b');
    graph.addVertex('c');
    graph.addVertex('d');
    graph.addVertex('e');
    graph.addVertex('f');
    graph.addVertex('g');
    expect(graph.vertices).toContain('n', 'm');
    expect(function(){graph.addVertex('a');}).toThrow(Error);
  });
  it('can add edges', ()=>{
    let graph = new Graph();
    graph.addVertex('n');
    expect(graph.vertices[0]).toBe('n');
    graph.addVertex('m');
    expect(graph.vertices[1]).toBe('m');
    graph.addVertex('a');
    graph.addVertex('b');
    graph.addVertex('c');
    graph.addVertex('d');
    graph.addVertex('e');
    graph.addVertex('f');
    graph.addVertex('g');
    expect(graph.vertices).toContain('n', 'm');
    graph.connect(graph.vertices[1], graph.vertices[5]);
    expect(graph.edges['m'][0]).toBe('d');
    graph.connect('m', 'b');
    expect(graph.edges['m'].length).toBe(2);
    expect(graph.edges['b']).toContain('m');
    graph.connect('b', 'q');
    expect(graph.edges['q']).toBeDefined();
    expect(function(){graph.connect('m', 'm');}).toThrow(Error);

  });
  it('can return all values of a graph using BFT', ()=>{
    let graph = new Graph();
    graph.addVertex('n');
    expect(graph.vertices[0]).toBe('n');
    graph.addVertex('m');
    expect(graph.vertices[1]).toBe('m');
    graph.addVertex('a');
    graph.addVertex('b');
    graph.addVertex('c');
    graph.addVertex('d');
    graph.addVertex('e');
    graph.addVertex('f');
    graph.addVertex('g');
    expect(graph.vertices).toContain('n', 'm');
    graph.connect(graph.vertices[1], graph.vertices[5]);
    expect(graph.edges['m'][0]).toBe('d');
    graph.connect('m', 'b');
    expect(graph.edges['m'].length).toBe(2);
    expect(graph.edges['b']).toContain('m');
    // console.log(graph.bft());
    expect(graph.bft().length).toBe(1);
    graph.connect('m', 'n');
    graph.connect('n', 'a');
    graph.connect('a', 'b');
    graph.connect('c', 'b');
    graph.connect('c', 'f');
    graph.connect('m', 'f');
    graph.connect('f', 'b');
    graph.connect('e', 'f');
    graph.connect('g', 'd');
    graph.connect('g', 'a');
    // let array = graph.bft();
    console.log(graph);
    console.log(graph.bft().length);
    expect(graph.bft().length).toBe(9);
    expect(array).toContain('a', 'b', 'c', 'd', 'e', 'f', 'g', 'n', 'm');
    console.log(array);
  });
});