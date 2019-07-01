<template>
  <section id="dashboard">
    <mdb-card class="mb-4">
      <mdb-card-body class="d-sm-flex justify-content-between">
        <h4 class="mb-sm-0 pt-2">
         
        </h4>
        <form class="d-flex md-form justify-content-center" style="margin:0;">
          <input aria-label="Search" class="form-control" placeholder="Type your query" type="search" />
          <mdb-btn color="primary" size="sm" class="my-0" type="submit"><i class="fa fa-search"></i></mdb-btn>
        </form>
      </mdb-card-body>
    </mdb-card>
    <section class="mt-lg-5">
      <mdb-row>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card secondary-color">
            <div class="admin-up">
              <mdb-icon icon="users" class="primary-color"/>
              <div class="data">
                <p>Currently on Training</p>
                <h4>
                  <p>2000</p>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="data">
              <p>Trainees</p>
              </div>
          </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card primary-color">
            <div class="admin-up">
              <mdb-icon icon="users" class="green accent"/>
              <div class="data">
                <p>Total Trainers</p>
                <h4> 
                  <p>500</p>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="data">
              <p>Trainers</p>
              </div>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card red accent-2">
            <div class="admin-up">
              <mdb-icon icon="users" class="secondary-color" />
              <div class="data">
                <p>On Apprentiship</p>
                <h4> 
                  <p>7000</p>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="data">
              <p>Apprentice</p>
              </div>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card green accent 2">
            <div class="admin-up">
              <mdb-icon icon="lightbulb" class="light-blue lighten-1" />
              <div class="data">
                <p>Dev Programs</p>
                <h4>
                  <p>21</p>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="data">
              <p>21 Total Programs</p>
              </div>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
    <!--- Chart Section ---->
    <section>
      <mdb-row class="mt-5">
         <mdb-col md="6" class="mb-4">
            <mdb-card class="mb-4">
            <mdb-card-header> <strong> Trainees currently on training Chart </strong> </mdb-card-header>
            <mdb-card-body>
              <div style="display: block">
                <mdb-line-chart :data="lineChartData" :options="lineChartOptions" :height="300"/>
              </div>
            </mdb-card-body>
             <mdb-card-text class="text-center">
                <Strong>Dev Progams</strong>
           </mdb-card-text>
          </mdb-card>  
          </mdb-col>
          <mdb-col md="6" class="mb-4">
             <mdb-card class="mb-4">
            <mdb-card-header><strong> Currently Registered Apprentiship Chart History</strong> </mdb-card-header>
            <mdb-card-body>
              <div style="display: block">
                <mdb-line-chart :data="lineChartData" :options="lineChartOptions" :height="300"/>
              </div>
            </mdb-card-body>
            <mdb-card-text class="text-center">
                <Strong>Center</strong>
           </mdb-card-text>
          </mdb-card>  
          </mdb-col>
      </mdb-row>
    </section>

    <section>
      <mdb-row>
        <mdb-col xl="3" md="6" class="mb-3">
         
        </mdb-col>
        <mdb-col xl="3" md="6" class="mb-3">
          
        </mdb-col>
        <mdb-col xl="3" md="6" class="mb-3">
          
        </mdb-col>
      </mdb-row>
    </section>
  </section>
</template>

<script>
import { mdbRow, mdbCol, mdbBtn, mdbCard, mdbCardBody, mdbCardHeader, mdbCardText, mdbIcon, mdbTbl, mdbBarChart, mdbPieChart, mdbLineChart, mdbRadarChart, mdbDoughnutChart, mdbListGroup, mdbListGroupItem, mdbBadge, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter } from 'mdbvue'
export default {
  name: 'Dashboard',
  components: {
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbCardHeader,
    mdbCardText,
    mdbIcon,
    mdbTbl,
    mdbBarChart,
    mdbPieChart,
    mdbLineChart,
    mdbRadarChart,
    mdbDoughnutChart,
    mdbListGroup,
    mdbListGroupItem,
    mdbBadge,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter
  },
  data () {
    return {
      isSearchResult:null,
      isSearchHasNoResult:false,
      barChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: '#1',
            data: [12, 39, 3, 50, 2, 32, 84],
            backgroundColor: 'rgba(245, 74, 85, 0.5)',
            borderWidth: 1
          }, {
            label: '#2',
            data: [56, 24, 5, 16, 45, 24, 8],
            backgroundColor: 'rgba(90, 173, 246, 0.5)',
            borderWidth: 1
          }, {
            label: '#3',
            data: [12, 25, 54, 3, 15, 44, 3],
            backgroundColor: 'rgba(245, 192, 50, 0.5)',
            borderWidth: 1
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            barPercentage: 1,
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
              beginAtZero: true
            }
          }]
        }
      },
      pieChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            data: [300, 50, 100, 40, 120, 24, 52],
            backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360', '#ac64ad'],
            hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774', '#da92db']
          }
        ]
      },
      pieChartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      lineChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: '#1',
            backgroundColor: 'rgba(245, 74, 85, 0.5)',
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: '#2',
            backgroundColor: 'rgba(90, 173, 246, 0.5)',
            data: [12, 42, 121, 56, 24, 12, 2]
          },
          {
            label: '#3',
            backgroundColor: 'rgba(245, 192, 50, 0.5)',
            data: [2, 123, 154, 76, 54, 23, 5]
          }
        ]
      },
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          xAxes: [{
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }]
        }
      },
      radarChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: '#1',
            backgroundColor: 'rgba(245, 74, 85, 0.5)',
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: '#2',
            backgroundColor: 'rgba(90, 173, 246, 0.5)',
            data: [12, 42, 121, 56, 24, 12, 2]
          },
          {
            label: '#3',
            backgroundColor: 'rgba(245, 192, 50, 0.5)',
            data: [2, 123, 154, 76, 54, 23, 5]
          }
        ]
      },
      radarChartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      doughnutChartData: {
        labels: ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'],
        datasets: [
          {
            data: [300, 50, 100, 40, 120],
            backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
            hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774']
          }
        ]
      },
      doughnutChartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cascading-admin-card {
  margin: 20px 0;
}
.cascading-admin-card .admin-up {
  margin-left: 4%;
  margin-right: 4%;
  margin-top: -20px;
}
.cascading-admin-card .admin-up .fas,
.cascading-admin-card .admin-up .far {
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
  padding: 1.7rem;
  font-size: 2rem;
  color: #fff;
  text-align: left;
  margin-right: 1rem;
  border-radius: 3px;
}
.cascading-admin-card .admin-up .data {
  float: right;
  margin-top: 2rem;
  text-align: right;
}
.admin-up .data p {
  color:white;
  font-size: 20px;
}
.admin-up1 .data1 p {
  color: white;
}
.data{
  color:white;
  font-size: 20px;
}
.classic-admin-card .card-body {
  color: #fff;
  margin-bottom: 0;
  padding: 0.9rem;
}
.classic-admin-card .card-body p {
  font-size: 13px;
  opacity: 0.7;
  margin-bottom: 0;
}
.classic-admin-card .card-body h4 {
  margin-top: 10px;
}
.has-search .form-control-feedback {
    position: absolute;
    display: block;
    width: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #007851;
}
  .has-search .form-control {
    padding-left: 2.375rem;
}
.search {
    width: 60%;
    margin: 20px auto;
   
}



</style>
