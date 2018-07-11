import React, { Component } from 'react';
import {
  Layout, BackTop, Input,
} from 'antd';

import RecordTable from 'components/RecordTable';
import Pagination from 'components/Pagination';

import AppHeader from 'components/AppHeader';
import AppFooter from 'components/AppFooter';

import './App.css';

const { Content } = Layout;

const { Search } = Input;

class App extends Component {
  componentDidMount() {
    const { loadData } = this.props;
    loadData();
  }

  onSearch = () => {}

  onChangePage = (pageNo) => {
    const { pageChange } = this.props;
    pageChange(pageNo);
  }

  render() {
    const {
      records, isLoading,
      pageNo, pageSize, totalRecords,
    } = this.props;
    return (
      <Layout className="layout">
        <BackTop />
        <AppHeader />
        <Content className="container">
          <div className="content">
            <Search
              onSearch={this.onSearch}
              placeholder="Search for records after departure date (e.g. 25/03/2018)"
              enterButton
            />
            <RecordTable records={records} isLoading={isLoading} />
            <Pagination
              showingNow={records && records.length}
              pageNo={pageNo}
              pageSize={pageSize}
              totalRecords={totalRecords}
              changePage={this.onChangePage}
            />
          </div>
        </Content>
        <AppFooter />
      </Layout>);
  }
}

export default App;
