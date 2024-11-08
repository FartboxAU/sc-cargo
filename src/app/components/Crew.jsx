import React from 'react';
import FormattedValueField from './FormattedValueField.jsx';

class Crew extends React.Component {

    addCrew() {
        this.props.addCrew();
    }

    removeCrew(index) {
        this.props.removeCrew(index);
    }

    updateCrew(prop, index, ref, value) {
        this.props.updateCrew(index, prop, value);
    }

    updateCrewType(index, type) {
        console.log('updateCrewType', index, type);
        this.props.updateCrewType(index, type);
    }

    handleError(e) {

    }

    render() {
        return (
            <div className="manifest__crew section">
                <h3>Crew</h3>
                <p>
                    Profit calculations can be a fixed price (<em className="UEC"></em>) or a Percentage (%).
                </p>
                <table id="crew" className="data-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th id="crew-cut">Cut</th>
                            <th>Estimate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.crew.map((crew, i) => {
                        let field = {
                            ref:   'manifest__crew-cut-'+i,
                            type:  'text',
                            label: 'Crew cut',
                            value: crew.cut
                        };

                        return (
                            <tr key={i}>
                                <td width="50%">
                                    <input
                                        type="text"
                                        onChange={this.updateCrew.bind(this, 'name', i)}
                                        value={crew.name}
                                    />
                                </td>
                                <td width="25%">
                                    <FormattedValueField
                                        field={field}
                                        labelledBy="crew-cut"
                                        cutType={crew.type}
                                        types={['UEC', 'Percentage %']}
                                        handleChange={this.updateCrew.bind(this, 'cut', i)}
                                        handleError={this.handleError.bind(this)}
                                        setType={this.updateCrewType.bind(this, i)}
                                    />
                                </td>
                                <td width="20%">
                                    <span className="UEC">{crew.estimate}</span>
                                </td>
                                <td width="5%">
                                    <button
                                        className="icon-button fi-x alert"
                                        aria-label="Remove"
                                        onClick={this.removeCrew.bind(this, i)}>
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Totals:</th>
                            <td></td>
                            <td><span className="UEC">{this.props.scope.crewCut}</span></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
                <button className="button" onClick={this.addCrew.bind(this)}>
                    <i className="fi-plus"></i><span> Add Crew</span>
                </button>
            </div>
        );
    }
}

export default Crew;