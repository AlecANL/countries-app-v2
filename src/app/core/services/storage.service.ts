import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageModule {
  handleSaveToStorage<T = any>(key: string, valueToSave: T) {
    localStorage.setItem(key, JSON.parse(valueToSave));
  }

  handleGetToStorage(key: string) {
    JSON.stringify(localStorage.getItem(key));
  }
}
