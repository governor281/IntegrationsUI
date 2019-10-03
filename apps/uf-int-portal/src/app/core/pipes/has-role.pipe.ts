import { Pipe, PipeTransform } from '@angular/core';
import { RoleManager } from '../authorization/guards/rolemanager.service';

@Pipe({
  name: 'hasRole',
  pure: true
})
export class HasRolePipe implements PipeTransform {
  constructor(private roleManager: RoleManager) {}
  transform(value: any, toCheck: string): boolean {
    console.count(toCheck);
    return this.roleManager[toCheck]();
  }
}
