/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 * @emails javascript@lists.facebook.com voloko@fb.com
 */

describe('ResourceMap', function() {

  var ResourceMap = require('../lib/ResourceMap');
  var Resource = require('../lib/resource/Resource');

  it('should intialize from a list', function() {
    var a, b;
    var map = new ResourceMap([
      a = new Resource('a'),
      b = new Resource('b')
    ]);

    expect(map.getResource('Resource', 'a')).toBe(a);
    expect(map.getResource('Resource', 'b')).toBe(b);
    expect(map.getResource('Resource', 'c')).toBe(undefined);
    expect(map.getAllResources()).toEqual([a, b]);
  });

  it('should add elements', function() {
    var a, b;
    var map = new ResourceMap([
      a = new Resource('a')
    ]);
    map.addResource(b = new Resource('b'));

    expect(map.getResource('Resource', 'b')).toBe(b);
    expect(map.getAllResources()).toEqual([a, b]);
  });

  it('should update elements', function() {
    var a1, a2;
    var map = new ResourceMap([
      a1 = new Resource('a')
    ]);
    map.updateResource(a1, a2 = new Resource('a'));

    expect(map.getResource('Resource', 'a')).toBe(a2);
  });

  it('should remove elements', function() {
    var a, b;
    var map = new ResourceMap([
      a = new Resource('a'),
      b = new Resource('b')
    ]);
    map.removeResource(b);
    expect(map.getResource('Resource', 'b')).toBe(undefined);
    expect(map.getAllResources()).toEqual([a]);
  });
});