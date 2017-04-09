# NODEAFKA

A collection of scripts to run components of Apache Kafka. I wrote this to automate some processes while learning the Kafka API.

### REQUISITES
Apache Kafka 0.10.2.0 release.

Set your kafka installation as your `KAFKA_PATH` environment variable.

### USAGE

Install node_modules:
```
npm install
```

Run zookeeper:
```
npm run zookeeper
```

Run a kafka server (default config is the `config/server.properties` file in your Kafka's installation):
```
npm run serve
```

Run a server with a custom config file (place it in `./config/kafka/`):
```
npm run serve -- --server your-server-name
```

Create a topic:
```
npm run create -- --topic your-topic-name
```

Create a topic with a replication factor of 3:
```
npm run create -- --topic --replication-factor 3
```

Describe a topic:
```
npm run describe -- --topic your-topic-name
```

Create and/or run a producer:
```
npm run producer
```

Create and/or run a consumer:
```
npm run consumer
```

*Notes:

- `npm start` does nothing, for now; I'm still thinking about what process to run.
- When testing fault-tolerance in Chapter 6, make sure you create a producer and consumer first. Consumers only see data from the moment of creation. So if your producer sends a message, and you kill the leader, starting up a consumer won't reveal the new message unless the consumer had previously been created. See the [FAQ](https://cwiki.apache.org/confluence/display/KAFKA/FAQ#FAQ-Whyisdatanotevenlydistributedamongpartitionswhenapartitioningkeyisnotspecified?).
- Kafka Connect source only triggers a message transmission when there's a newline. So, when editing a 'test.txt' file in Chapter 7 of the Quick Start guide, enter a newline before saving to see the change in 'test.sink.txt'.

### TODOS
More succint api for running the scripts.