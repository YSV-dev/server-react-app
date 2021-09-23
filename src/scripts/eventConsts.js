export const PROXY_EVENT = 'sendToProxy';

// перечисление названий логгеров
export const loggerTypes = {
    general: {type: 'general', write: true}
}

function makeKey(length = 16) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

export const callbackEvents = {
    loading: 'loading'
}

export function createCallback(eventName, standartNaming = false, localEvent = null, data = null) {
    var EventName = false;
    var LocalEvent = false;
    var key = makeKey()

    LocalEvent = standartNaming? eventName + 'Start' : localEvent;
    EventName = standartNaming? eventName + 'End' : eventName;

    return {
        eventName: EventName,
        localEvent: LocalEvent,
        data: {
            key: key,
            data: data
        }
    } 
}