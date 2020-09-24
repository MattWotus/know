import React from 'react';

class VisitForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      city: '',
      date: '',
      diseases: [
        { chlamydia: null },
        { gonorrhea: null },
        { hepatitis: null },
        { herpes: null },
        { hiv: null },
        { hpv: null },
        { syphilis: null }
      ],
      state: ''
    };
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newVisit = {
      city: this.state.city,
      date: this.state.date,
      diseases: [
        { chlamydia: this.state.chlamydia },
        { gonorrhea: this.state.gonorrhea },
        { hepatitis: this.state.hepatitis },
        { herpes: this.state.herpes },
        { hiv: this.state.hiv },
        { hpv: this.state.hpv },
        { syphilis: this.state.syphilis }
      ],
      state: this.state.state
    };
    this.props.onSubmit(newVisit);
    this.setState({
      city: '',
      date: '',
      diseases: [
        { chlamydia: null },
        { gonorrhea: null },
        { hepatitis: null },
        { herpes: null },
        { hiv: null },
        { hpv: null },
        { syphilis: null }
      ],
      state: ''
    });
    document.getElementById('visitForm').reset();
  }

  handleReset() {
    this.setState({
      city: '',
      date: '',
      diseases: [
        { chlamydia: null },
        { gonorrhea: null },
        { hepatitis: null },
        { herpes: null },
        { hiv: null },
        { hpv: null },
        { syphilis: null }
      ],
      state: ''
    });
    document.getElementById('visitForm').reset();
  }

  render() {
    const city = this.state.city;
    const date = this.state.date;
    const diseases = [
      { chlamydia: this.state.chlamydia },
      { gonorrhea: this.state.gonorrhea },
      { hepatitis: this.state.hepatitis },
      { herpes: this.state.herpes },
      { hiv: this.state.hiv },
      { hpv: this.state.hpv },
      { syphilis: this.state.syphilis }
    ];
    const state = this.state.state;
    const header = {
      height: '8vh',
      backgroundColor: '#62B3F5',
      color: 'rgb(255, 255, 255'
    };
    const dateWidth = {
      maxWidth: '60vw'
    };
    const cityWidth = {
      maxWidth: '35vw'
    };
    const stateWidth = {
      maxWidth: '25vw'
    };
    const resultWidth = {
      maxWidth: '30vw'
    };
    return (
      <div className="container">
        <div className="row">
          <form id="visitForm" onSubmit={this.handleSubmit} onReset={this.handleReset} className="col-12">
            <div className="row" style={header}>
              <div className="col-12 d-flex justify-content-between align-items-center">
                <button onClick={() => this.props.setView('visits')} type="reset" className="btn"><h6 className="whiteColor mt-1 mb-0">Cancel</h6></button>
                <h4 className="mb-0">New Test</h4>
                <button type="submit" className="btn"><h6 className="whiteColor mt-1 mb-0">Add</h6></button>
              </div>
            </div>
            <div className="input-group d-flex align-items-center justify-content-between border-bottom mt-3 pb-3">
              <label htmlFor="date" className="mb-0"><h5 className="mb-0">Date</h5></label>
              <input type="date" id="date" className="form-control" name="date" aria-label="date"
                aria-describedby="basic-addon1" style={dateWidth} value={date} onChange={this.handleChange} />
            </div>
            <div className="input-group d-flex align-items-center justify-content-between border-bottom pt-3 pb-3">
              <label htmlFor="location" className="mb-0"><h5 className="mb-0">Location</h5></label>
              <div className="d-flex">
                <input type="text" id="location" className="form-control mr-2" name="city" placeholder="City" style={cityWidth} value={city} onChange={this.handleChange} />
                <select className="form-control" name="state" aria-label="location"
                  aria-describedby="basic-addon1" style={stateWidth} value={state} onChange={this.handleChange}>
                  <option defaultValue>State</option>
                  <option>AL</option>
                  <option>AK</option>
                  <option>AZ</option>
                  <option>AR</option>
                  <option>CA</option>
                  <option>CO</option>
                  <option>CT</option>
                  <option>DE</option>
                  <option>FL</option>
                  <option>GA</option>
                  <option>HI</option>
                  <option>ID</option>
                  <option>IL</option>
                  <option>IN</option>
                  <option>IA</option>
                  <option>KS</option>
                  <option>KY</option>
                  <option>LA</option>
                  <option>ME</option>
                  <option>MD</option>
                  <option>MA</option>
                  <option>MI</option>
                  <option>MN</option>
                  <option>MS</option>
                  <option>MO</option>
                  <option>MT</option>
                  <option>NE</option>
                  <option>NV</option>
                  <option>NH</option>
                  <option>NJ</option>
                  <option>NM</option>
                  <option>NY</option>
                  <option>NC</option>
                  <option>ND</option>
                  <option>OH</option>
                  <option>OK</option>
                  <option>OR</option>
                  <option>PA</option>
                  <option>RI</option>
                  <option>SC</option>
                  <option>SD</option>
                  <option>TN</option>
                  <option>TX</option>
                  <option>UT</option>
                  <option>VT</option>
                  <option>VA</option>
                  <option>WA</option>
                  <option>WV</option>
                  <option>WI</option>
                  <option>WY</option>
                </select>
              </div>
            </div>
            <div className="input-group d-flex align-items-center justify-content-between pt-3 pb-2">
              <label htmlFor="chlamydia" className="mb-0"><h5 className="mb-0">Chlamydia</h5></label>
              <select id="chlamydia" className="form-control" name="chlamydia" aria-label="location"
                aria-describedby="basic-addon1" style={resultWidth} value={diseases.chlamydia} onChange={this.handleChange}>
                <option defaultValue>Result</option>
                <option>Positive</option>
                <option>Negative</option>
                <option>N/A</option>
              </select>
            </div>
            <div className="input-group d-flex align-items-center justify-content-between pt-2 pb-2">
              <label htmlFor="gonorrhea" className="mb-0"><h5 className="mb-0">Gonorrhea</h5></label>
              <select id="gonorrhea" className="form-control" name="gonorrhea" aria-label="location"
                aria-describedby="basic-addon1" style={resultWidth} value={diseases.gonorrhea} onChange={this.handleChange}>
                <option defaultValue>Result</option>
                <option>Positive</option>
                <option>Negative</option>
                <option>N/A</option>
              </select>
            </div>
            <div className="input-group d-flex align-items-center justify-content-between pt-2 pb-2">
              <label htmlFor="hepatitis" className="mb-0"><h5 className="mb-0">Hepatitis</h5></label>
              <select id="hepatitis" className="form-control" name="hepatitis" aria-label="location"
                aria-describedby="basic-addon1" style={resultWidth} value={diseases.hepatitis} onChange={this.handleChange}>
                <option defaultValue>Result</option>
                <option>Positive</option>
                <option>Negative</option>
                <option>N/A</option>
              </select>
            </div>
            <div className="input-group d-flex align-items-center justify-content-between pt-2 pb-2">
              <label htmlFor="herpes" className="mb-0"><h5 className="mb-0">Herpes</h5></label>
              <select id="herpes" className="form-control" name="herpes" aria-label="location"
                aria-describedby="basic-addon1" style={resultWidth} value={diseases.herpes} onChange={this.handleChange}>
                <option defaultValue>Result</option>
                <option>Positive</option>
                <option>Negative</option>
                <option>N/A</option>
              </select>
            </div>
            <div className="input-group d-flex align-items-center justify-content-between pt-2 pb-2">
              <label htmlFor="HIV" className="mb-0"><h5 className="mb-0">HIV</h5></label>
              <select id="HIV" className="form-control" name="hiv" aria-label="location"
                aria-describedby="basic-addon1" style={resultWidth} value={diseases.hiv} onChange={this.handleChange}>
                <option defaultValue>Result</option>
                <option>Positive</option>
                <option>Negative</option>
                <option>N/A</option>
              </select>
            </div>
            <div className="input-group d-flex align-items-center justify-content-between pt-2 pb-2">
              <label htmlFor="HPV" className="mb-0"><h5 className="mb-0">HPV</h5></label>
              <select id="HPV" className="form-control" name="hpv" aria-label="location"
                aria-describedby="basic-addon1" style={resultWidth} value={diseases.hpv} onChange={this.handleChange}>
                <option defaultValue>Result</option>
                <option>Positive</option>
                <option>Negative</option>
                <option>N/A</option>
              </select>
            </div>
            <div className="input-group d-flex align-items-center justify-content-between pt-2 pb-2">
              <label htmlFor="syphilis" className="mb-0"><h5 className="mb-0">Syphilis</h5></label>
              <select id="syphilis" className="form-control" name="syphilis" aria-label="location"
                aria-describedby="basic-addon1" style={resultWidth} value={diseases.syphilis} onChange={this.handleChange}>
                <option defaultValue>Result</option>
                <option>Positive</option>
                <option>Negative</option>
                <option>N/A</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default VisitForm;
