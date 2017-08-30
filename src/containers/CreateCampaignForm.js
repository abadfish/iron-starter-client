import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCampaign } from '../actions/campaigns';

class CreateCampaignForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            goal: 0,
            pledged: 0,
        }
    }

    handleOnChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const campaign = this.state;
        this.props.createCampaign(campaign, this.props.history);
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={this.state.title} 
                        onChange={this.handleOnChange} 
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea 
                        name="description" 
                        value={this.state.description}
                        onChange={this.handleOnChange}
                    >
                    </textarea>
                </div>
                <div>
                    <label htmlFor="goal">Goal:</label>
                    <input 
                        type="number" 
                        name="goal" 
                        value={this.state.goal === 0 ? '' : this.state.goal}
                        onChange={this.handleOnChange} 
                    />
                </div>
                <div>
                    <label htmlFor="pledged">Pledged:</label>
                    <input 
                        type="number" 
                        name="pledged" 
                        value={this.state.pledged === 0 ? '' : this.state.pledged}
                        onChange={this.handleOnChange} 
                    />
                </div>
                <div>
                    <button      type="submit">Create</button>
                </div>
            </form>
        );
    }
};

export default connect(null, { createCampaign })(CreateCampaignForm);