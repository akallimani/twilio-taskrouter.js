import { WebSocket as MockWebSocket, Server } from 'mock-socket';

// temp hack until https://github.com/thoov/mock-socket/pull/186/files
class WS extends MockWebSocket {
    constructor(url) {
        const urlWithoutParams = url.split('?')[0];
        super(urlWithoutParams);
    }
}

const mockServer = new Server('wss://127.0.0.1'); // eslint-disable-line
global.WebSocket = WS;

require('./spec/Activity');
require('./spec/Channel');
require('./spec/Reservation');
require('./spec/Supervisor');
require('./spec/Task');
require('./spec/Worker');
require('./spec/signaling/EventBridgeSignaling');
require('./spec/util/Configuration');
require('./spec/util/Logger');
require('./spec/util/Paginator');
require('./spec/util/Tools');
require('./spec/util/TwilioError');
require('./spec/data/Activities');
require('./spec/data/Channels');
require('./spec/data/Reservations');
require('./spec/descriptors/ActivityDescriptor');
require('./spec/descriptors/WorkerChannelDescriptor');
require('./spec/descriptors/ReservationDescriptor');
require('./spec/descriptors/TaskDescriptor');
require('./spec/descriptors/WorkerDescriptor');
