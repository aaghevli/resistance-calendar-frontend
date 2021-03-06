import React, { Component } from 'react';

import { EventsList, EventFilters, Loading } from '../';
import { eventsAPI } from '../../api';
import styles from './Events.sass';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        searchText: '',
        location: null,
        range: null,
        startDate: null
      },
      isFetchingEvents: true,
      events: []
    };
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents() {
    this.setState({ isFetchingEvents: true });

    eventsAPI.getEvents()
      .then(res => this.setState({
        events: res._embedded['osdi:events'],
        isFetchingEvents: false
      }))
      .catch(err => {
        console.error(err);
        this.setState({ isFetchingEvents: false });
      });
  }

  updateFilters(updatedFilters) {
    this.setState({
      filters: {
        ...this.state.filters,
        ...updatedFilters
      }
    });
  }

  render() {
    const { filters, events, isFetchingEvents } = this.state;

    if (isFetchingEvents) {
      return <Loading />;
    }

    return (
      <div className={styles.container}>
        <div className={styles.filtersWrapper}>
          <EventFilters
            filters={filters}
            updateFilters={this.updateFilters.bind(this)}
          />
        </div>
        <EventsList
          events={events}
          filters={filters}
        />
      </div>
    );
  }
}

Events.propTypes = {};

export default Events;
