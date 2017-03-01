# Redux Saga Mediator Topology

This is a prototype of adopting the [Mediator topology](http://radar.oreilly.com/2015/02/variations-in-event-driven-architecture.html) pattern in a redux saga application.

![](http://radar.oreilly.com/wp-files/2/2015/02/sapr_0201.jpg)

## Responsibilities

### Mediator

The mediator is a traditional Redux Saga watcher that sits in the core code base and listens for USE_CASE actions (those emitted from the UI/Components) and in turn emits a series of `yield put` PROCESS actions that describe the work that needs to be done for a given USE_CASE. These PROCESS actions are picked up by an [actionChannel](https://redux-saga.github.io/redux-saga/docs/api/index.html#actionchannelpattern-buffer) and sequentially processed by all available domain modules sequentially until that action has been processed before moving onto the next. In addition, the mediator is responsible for using all available concurrency tools available to redux-saga to manage common concurrency problems including flushing the actionChannel if necessary.

**Further Opportunities**
- Perfect place for Feature Flags
- Could write a Business DSL to express business incredibly succinctly here

### Action channel

The Action channel sits between the Mediator and the Domain modules and allows these two entities to be decoupled. In addition, the Action channel is the sequencer for business logic expressed by the mediator.

### Domain Module

A domain module is any module that plugs into the core application and subscribes to any of the PROCESS actions available. Once a PROCESS action has been sent a domain module that domain module is responsible for handing that work to a Saga worker. A domain module expresses it's capabilities by what PROCESS actions it acts upon.

### Workers

Workers are Saga/Generator functions executed by a Domain module when a matching action is handed to it. Workers are meant to be atomic, have a single responsibility, and not chained as that orchestration is best expressed by the mediator.

## Benefits
1. Business Logic is expressed in a single place (Mediators) and is expressed succinctly and imperatively
1. Atomic workers (do a single operation, single responsibility, no chaining)
1. Manages Saga complexity by limiting watchers/concurrency to business logic/mediator only
1. Still offers all concurrency solutions we are already using (just focused at the mediator level)
1. Feature Flags can be centralized to Mediator so as not to pollute each worker with Listener Capabilities
1. All Domains are self contained modules allowing for seperate bundling, substition, versioning etc
1. Discourages intermediate data in favor of colocated `yield selects` in workers or adding data to action
