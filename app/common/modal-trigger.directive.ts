import { Directive, OnInit, Inject, ElementRef } from '@angular/core'
import { JQ_TOKEN } from './jquery.service'
@Directive({
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective {
    el: HTMLElement
    constructor(eRef: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.el = eRef.nativeElement
    }
    ngOnInit() {
this.el.addEventListener('click', ()=>{ 
    console.log('dasdasd')
    this.$('#simple-modal').modal({})
})
    }
}