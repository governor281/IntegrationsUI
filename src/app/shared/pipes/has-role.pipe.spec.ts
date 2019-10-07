import { HasRolePipe } from './has-role.pipe';
import { RoleManager } from '../../core/authorization/guards/rolemanager.service';
import { inject } from '@angular/core/testing';

describe('HasRolePipe', () => {
  it('create an instance', () => {
    inject([RoleManager], (roleManager: RoleManager) => {
      const pipe = new HasRolePipe(roleManager);
      expect(pipe).toBeTruthy();
    });
  });
});
