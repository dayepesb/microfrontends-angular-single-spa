import { Injectable } from '@angular/core';
import { mountRootParcel, Parcel, ParcelConfig } from 'single-spa';
import { Observable, from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EventBusService } from 'src/app/lib/event.service';


@Injectable({
  providedIn: 'root',
})
export class SingleSpaService {
  private loadedParcels: {
    [appName: string]: Parcel;
  } = {};

  mount(appName: string, domElement: HTMLElement, eventBusService: EventBusService): Observable<unknown> {
    console.log('Mount App', domElement);
    return from(System.import<ParcelConfig>(appName)).pipe(
      tap((app: ParcelConfig) => {
        this.loadedParcels[appName] = mountRootParcel(app, {
          domElement,
          EventBus: eventBusService
        });
      })
    );
  }

  unmount(appName: string): Observable<unknown> {
    return from(this.loadedParcels[appName].unmount()).pipe(
      tap(() => delete this.loadedParcels[appName])
    );
  }
}
