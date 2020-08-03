import React, { Component } from 'react'
import { Tab, Statistic, Table } from 'semantic-ui-react'

import '../assets/css/Result.css'

const panes = [
    {
      menuItem: 'Statistics',
      render: () => <Tab.Pane attached={false}>
            <Statistic.Group widths='four'>
                <Statistic>
                    <Statistic.Value>10</Statistic.Value>
                    <Statistic.Label>Total Questions</Statistic.Label>
                </Statistic>
            
                <Statistic>
                    <Statistic.Value>
                        80%
                    </Statistic.Value>
                    <Statistic.Label>Your Score</Statistic.Label>
                </Statistic>
            
                <Statistic color="green">
                    <Statistic.Value>
                        8
                    </Statistic.Value>
                    <Statistic.Label>Right Answers</Statistic.Label>
                </Statistic>
                <Statistic color="yellow">
                    <Statistic.Value>
                        6
                    </Statistic.Value>
                    <Statistic.Label>Passing Score</Statistic.Label>
                </Statistic>
            </Statistic.Group>
      </Tab.Pane>,
    },
    {
      menuItem: 'Answers',
      render: () => <Tab.Pane attached={false}>
        <Table celled color="blue">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>No.</Table.HeaderCell>
                    <Table.HeaderCell>Question</Table.HeaderCell>
                    <Table.HeaderCell>Difficulty</Table.HeaderCell>
                    <Table.HeaderCell>Right Answer</Table.HeaderCell>
                    <Table.HeaderCell>Your Answer</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        
            <Table.Body>
                <Table.Row>
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell>What five letter word is the motto of the IBM Computer company?</Table.Cell>
                    <Table.Cell>Medium</Table.Cell>
                    <Table.Cell>Think</Table.Cell>
                    <Table.Cell>Logic</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell>What five letter word is the motto of the IBM Computer company?</Table.Cell>
                    <Table.Cell>Medium</Table.Cell>
                    <Table.Cell>Think</Table.Cell>
                    <Table.Cell>Logic</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell>What five letter word is the motto of the IBM Computer company?</Table.Cell>
                    <Table.Cell>Medium</Table.Cell>
                    <Table.Cell>Think</Table.Cell>
                    <Table.Cell>Logic</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell>What five letter word is the motto of the IBM Computer company?</Table.Cell>
                    <Table.Cell>Medium</Table.Cell>
                    <Table.Cell>Think</Table.Cell>
                    <Table.Cell>Logic</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell>What five letter word is the motto of the IBM Computer company?</Table.Cell>
                    <Table.Cell>Medium</Table.Cell>
                    <Table.Cell>Think</Table.Cell>
                    <Table.Cell>Logic</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell>What five letter word is the motto of the IBM Computer company?</Table.Cell>
                    <Table.Cell>Medium</Table.Cell>
                    <Table.Cell>Think</Table.Cell>
                    <Table.Cell>Logic</Table.Cell>
                </Table.Row>
            </Table.Body>
            </Table>
      </Tab.Pane>
    },
    {
      menuItem: 'Leaderboard',
      render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
    },
  ]
export class Result extends Component {
    render() {
        return (
            <Tab className="result-box" menu={{color: 'blue', secondary: true, pointing: true }} panes={panes} />
        )
    }
}

export default Result
