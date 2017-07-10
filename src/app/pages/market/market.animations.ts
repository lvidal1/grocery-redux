import { trigger, style, transition, animate,sequence, group } from '@angular/animations';

export const animationProductItem = [
    trigger('itemAnim', [
        transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate(250)
        ]),
        transition(':leave', [
            group([
                animate('0.2s ease', style({
                transform: 'translate(150px,25px)'
                })),
                animate('0.5s 0.2s ease', style({
                opacity: 0
                }))
            ])
        ])
    ]),
    trigger('anim', [
        // transition('* => void', [
        //   style({ height: '*', opacity: '1', transform: 'none'}),
        //   sequence([
        //     animate(".25s ease", style({ height: '*', opacity: '.2', transform: 'translateX(20px)', 'box-shadow': 'none'  })),
        //     animate(".1s ease", style({ height: '0', opacity: 0, transform: 'translateX(20px)', 'box-shadow': 'none'  }))
        //   ])
        // ]),
        transition('void => active', [
          style({ height: '0', opacity: '0', transform: 'translateX(20px)', 'box-shadow': 'none' }),
          sequence([
            animate(".1s ease", style({ height: '*', opacity: '.2', transform: 'translateX(20px)', 'box-shadow': 'none'  })),
            animate(".35s ease", style({ height: '*', opacity: 1, transform: 'translateX(0)'  }))
          ])
        ])
    ])
]