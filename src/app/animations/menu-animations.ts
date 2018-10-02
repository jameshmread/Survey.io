import { trigger, state, style, transition, animate } from '@angular/animations';

export class MenuAnimations {

      public static menuOpenClose () {
            return trigger('openClose', [
                  state('1', style({
                        width: '250px',
                  })),
                  state('0', style({
                        width: '100px',
                  })),
                  transition('* => *', animate('0.2s'))
            ]);
      }
}
