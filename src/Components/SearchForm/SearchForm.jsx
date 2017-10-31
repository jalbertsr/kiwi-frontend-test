import React from 'React'
import { Row, Col, Form, Button } from 'antd'

import SearchBar from '../SearchBar/SearchBar'
import Calendar from '../Calendar/RangePicker'
import styles from './SearchForm.css'

const SearchForm = (props) => (
  <Form onSubmit={props.handleSubmit}>
    <div className={styles.searchForm}>
      <Row>
        <Col span={10} offset={2}>
          <p className={styles.searchTitle}>From:</p>
          <SearchBar
            use={'from'}
            onChange={props.handleChange}
            placeholder={'Brno'}
          />
          <p className={styles.searchTitle}>To:</p>
          <SearchBar
            use={'to'}
            onChange={props.handleChange}
            placeholder={'Barcelona'}
          />
          <p className={styles.searchTitle}>Dates:</p>
          <Calendar
            className={styles.datePicker}
            getDates={props.handleDates}
          />
          <Button type='primary' htmlType='submit'>
          Search
          </Button>
        </Col>
      </Row>
    </div>
  </Form>
)

export default SearchForm
