import React, { Component } from "react";
import "./Searchfield.css";
import axios from "axios";
import Loader from "react-loader-spinner";

class Searchfield extends Component {
  state = {
    keyTimer: null,
    locations: [],
    loading: false,
    searchValue: "",
    enableSearch: false
  };

  render() {
    let state = this.state;

    return (
      <div className="search">
        <span>{this.props.label}</span>
        <input
          value={state.searchValue}
          onChange={event => {
            this.handleInput(event);
          }}
          placeholder="Search"
        ></input>
        <ul
          style={{
            display:
              state.locations.length || state.loading > 0 ? "block" : "none"
          }}
        >
          <Loader
            className="search-loader"
            visible={state.loading}
            type="ThreeDots"
            color="#00BFFF"
            height={50}
            width={50}
          ></Loader>
          {state.locations.map(location => {
            return (
              <li
                onClick={e => {
                  this.handleLocationClick(e);
                }}
                key={this.generateId()}
              >
                {location.name}
              </li>
            );
          })}
        </ul>
        <button
          disabled={!state.enableSearch}
          className={
            "btn btn-primary" +
            (this.props.device === "mobile" ? " btn-sm" : "")
          }
          onClick={e => this.handleSearchClick(e)}
        >
          Click to search
        </button>
      </div>
    );
  }

  handleInput(e) {
    clearTimeout(this.state.keyTimer);

    let value = e.target.value;

    this.setState({ searchValue: value });
    if (value) {
      let keyTimer = setInterval(() => {
        clearTimeout(this.state.keyTimer);
        this.loadFromCache(value);
      }, this.props.typingTimeout);
      this.setState({ keyTimer });
    } else {
      this.setState({ locations: [], enableSearch: false });
    }
  }

  loadFromCache(query) {
    let cacheName = this.props.cacheName,
      cache = JSON.parse(localStorage.getItem(cacheName)) || {};

    if (query in cache) {
      if (Date.now() - cache[query].timestamp > this.props.cacheExpiration) {
        this.requestLocations(query);
      } else {
        this.setState({ locations: cache[query].locations });
        console.log("Served from cache!");
      }
    } else {
      this.requestLocations(query);
    }
  }

  storeToCache(query, locations) {
    let cacheName = this.props.cacheName,
      cache = JSON.parse(localStorage.getItem(cacheName)) || {};

    cache[query] = { locations: locations, timestamp: Date.now() };
    localStorage.setItem(cacheName, JSON.stringify(cache));
  }

  requestLocations(query) {
    let dataUrl = this.props.dataUrl,
      language = this.props.language;

    if (query.length >= 2) {
      this.setState({ loading: true });
      axios
        .get(`${dataUrl}?keywords=${query}&language=${language}`, {
          timeout: this.props.requestTimeout
        })
        .then(
          function(query, response) {
            let entries = response.data.entries;

            this.setState({ locations: entries, loading: false });
            this.storeToCache(query, entries);
          }.bind(this, query)
        )
        .catch(
          function(error) {
            console.error(error);
            this.setState({ locations: [], loading: false });
          }.bind(this)
        );
    }
  }

  handleLocationClick(e) {
    let location = e.target.innerText;

    this.setState({ searchValue: location, enableSearch: true });
  }

  handleSearchClick() {
    window.open(`https://www.google.com.tr/search?q=${this.state.searchValue}`);
  }

  generateId() {
    return Math.random()
      .toString(36)
      .substr(2, 9);
  }
}

export default Searchfield;
