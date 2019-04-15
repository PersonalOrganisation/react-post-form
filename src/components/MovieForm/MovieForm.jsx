import React, { Component } from 'react';
import './MovieForm.css';

  class MovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          poster: '',
          comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
      }
      
      onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
       }
    submitForm(e) {
        const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";
        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
           };

        fetch(url, config)
        .then(res => res.json())
        .then(res => {
        if (res.error) {
            alert(res.error);
        } else {
            alert(`The movie ${res} has been checked in !`);
        }
        }).catch(e => {
        console.error(e);
        alert('Error while recording the movie !');
        });

        e.preventDefault();    
    }


    render() {
      return (
        <div className="MovieForm">
            <h1>What is your film prefered ?</h1>

            <form onSubmit={this.submitForm}>
            <fieldset>
                <legend>Informations</legend>
                <div className="form-data">
                <label htmlFor="lastname">Movie</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={this.onChange}
                    value={this.state.name}
                />
                </div>

                <div className="form-data">
                <label htmlFor="firstname">Url</label>
                <input
                    type="url"
                    id="poster"
                    name="poster"
                    onChange={this.onChange}
                    value={this.state.poster}
                />
                </div>

                <div className="form-data">
                <label htmlFor="textarea">Comment</label>
                <input
                    type="textarea"
                    id="comment"
                    name="comment"
                    onChange={this.onChange}
                    value={this.state.comment}
                />
                </div>
                <hr />
                <div className="form-data">
                <input type="submit" value="Submit" />
                </div>
            </fieldset>
            </form>
        </div>
      );
    }
  }
  
  export default MovieForm;