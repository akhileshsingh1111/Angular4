import {InjectionToken} from '@angular/core'
//OpaqueToken deprecated sicne v4.0 as it doesnt specify type information
export let JQ_TOKEN = new InjectionToken<Object>('jQuery');
