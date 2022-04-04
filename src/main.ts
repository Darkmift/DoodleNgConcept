import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
declare global {
  interface Window {
    configGlobal: any;
  }
}

fetch('./assets/config.json')
  .then((response) => response.json())
  .then((data) => {
    console.log('🚀 ~ file: main.ts ~ line 10 ~ data', data);
    window.configGlobal = data;
    
    if (environment.production) {
      enableProdMode();
    }

    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch((err) => console.error(err));
  })
  .catch((error) => console.log(error));
