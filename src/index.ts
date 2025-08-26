import configs from "@root/config.json"
import { SimpleServer } from "@/class";

const simpleServers: SimpleServer[] = [];

// Construct simple servers
for (let config of configs) {
    simpleServers.push(new SimpleServer(config));
}

// Deploy simple servers
for (let simpleServer of simpleServers) {
    simpleServer.deploy();
}