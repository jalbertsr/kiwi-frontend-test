import React from 'React'
import PropTypes from 'prop-types'
import { Row, Col, Form, Button } from 'antd'
import SearchBar from '../SearchBar/SearchBar'
import Calendar from '../Calendar/RangePicker'
import styles from './SearchForm.css'

const SearchForm = ({ handleSubmit, handleChange, handleDates }) =>
  <Form onSubmit={handleSubmit}>
    <div className={styles.searchForm}>
      <Row>
        <Col md={10} xs={20} offset={2}>
          <p className={styles.searchTitle}>From:</p>
          <SearchBar
            use={'from'}
            onChange={handleChange}
            placeholder={'Barcelona'}
          />
          <p className={styles.searchTitle}>To:</p>
          <SearchBar
            use={'to'}
            onChange={handleChange}
            placeholder={'Brno'}
          />
          <p className={styles.searchTitle}>Dates:</p>
          <Calendar
            className={styles.datePicker}
            getDates={handleDates}
          />
          <Button className={styles.buttonSearch} type='primary' htmlType='submit'>
          Search
          </Button>
        </Col>
        <Col offset={4} md={4}>
          <img className={styles.logo} width='100%' src='https://s.productreview.com.au/products/images/b1fd66fc-1ded-492d-89ab-815912295ef3.png' />
        </Col>
      </Row>
    </div>
  </Form>

export default SearchForm

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleDates: PropTypes.func.isRequired
}
