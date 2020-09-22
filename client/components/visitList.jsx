import React from 'react';
import VisitListItem from './visitListItem';

class VisitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visits: [] };
    this.getVisits = this.getVisits.bind(this);
  }

  componentDidMount() {
    this.getVisits();
  }

  getVisits() {
    // fetch('/api/visits')
    //   .then(response => response.json())
    //   .then(data => this.setState({ visits: data }));
    const fakeData = [
      {
        city: 'Chicago',
        date: '2020-09-21T04:00:00.000Z',
        diseases: [
          {
            chlamydia: false
          },
          {
            gonorrhea: false
          },
          {
            hepatitis: false
          },
          {
            herpes: true
          },
          {
            hiv: false
          },
          {
            syphilis: false
          }
        ],
        state: 'IL',
        visitId: 1
      },
      {
        city: 'Los Angeles',
        date: '2020-09-18T04:00:00.000Z',
        diseases: [
          {
            chlamydia: false
          },
          {
            gonorrhea: false
          },
          {
            hepatitis: false
          },
          {
            herpes: true
          },
          {
            hiv: false
          },
          {
            syphilis: false
          }
        ],
        state: 'CA',
        visitId: 2
      },
      {
        city: 'Los Angeles',
        date: '2020-09-18T04:00:00.000Z',
        diseases: [
          {
            chlamydia: false
          },
          {
            gonorrhea: false
          },
          {
            hepatitis: false
          },
          {
            herpes: true
          },
          {
            hiv: false
          },
          {
            syphilis: false
          }
        ],
        state: 'CA',
        visitId: 3
      },
      {
        city: 'Los Angeles',
        date: '2020-09-18T04:00:00.000Z',
        diseases: [
          {
            chlamydia: false
          },
          {
            gonorrhea: false
          },
          {
            hepatitis: false
          },
          {
            herpes: true
          },
          {
            hiv: false
          },
          {
            syphilis: false
          }
        ],
        state: 'CA',
        visitId: 4
      },
      {
        city: 'Los Angeles',
        date: '2020-09-16T04:00:00.000Z',
        diseases: [
          {
            chlamydia: false
          },
          {
            gonorrhea: false
          },
          {
            hepatitis: false
          },
          {
            herpes: true
          },
          {
            hiv: false
          },
          {
            syphilis: false
          }
        ],
        state: 'CA',
        visitId: 5
      }
    ];
    this.setState({ visits: fakeData });
  }

  render() {
    if (this.state.visits.length === 0) {
      return <h3>No visits recorded</h3>;
    } else {
      return (
        this.state.visits.map(visit => {
          return (
            <VisitListItem
              key={visit.visitId}
              id={visit.visitId}
              date={visit.date} />
          );
        })
      );
    }
  }
}

export default VisitList;
