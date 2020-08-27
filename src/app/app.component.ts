import { Component, OnInit } from '@angular/core';
import { MyObject } from './myObject';
import { SmallObjects } from './smallObjects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'task7';

  public object1: SmallObjects = {id: 1, name: 'test1'};
  public object2: SmallObjects = {id: 2, name: 'test2'};
  public relatedObjects: SmallObjects[] = [this.object1, this.object2];

  public newObject: SmallObjects;
  public updatedObject: SmallObjects;

  ngOnInit() {
    this.newObject = {id: 3, name: 'test3'};
    this.updatedObject = {id: null, name: ''};
  }

  addNewRelatedObject() {
    this.relatedObjects.push(this.newObject);
  }

  editSecondElement(updatedObject: SmallObjects) {
    const ObjectToUpdate = this.relatedObjects.find(this.findIndexToUpdate);
    const index = this.relatedObjects.indexOf(ObjectToUpdate);
    this.relatedObjects[index] = updatedObject;

  }

  findIndexToUpdate(updatedObject) {
    return updatedObject.name === 'test2';
  }

}
