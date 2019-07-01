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
              <mdb-icon icon="building" class="primary-color"/>
              <div class="data">
                <p>Registered Companies</p>
                <h4>
                  <p>2000</p>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="data">
              <p>Companies</p>
              </div>
          </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card primary-color">
            <div class="admin-up">
              <mdb-icon icon="users" class="green accent"/>
              <div class="data">
                <p>Training Providers</p>
                <h4> 
                  <p>500</p>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="data">
              <p>Training Providers</p>
              </div>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card red accent-2">
            <div class="admin-up">
              <mdb-icon icon="users" class="secondary-color" />
              <div class="data">
                <p>Total Artisans</p>
                <h4> 
                  <p>7000</p>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="data">
              <p>Total</p>
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
              <p>Total Programs</p>
              </div>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
    <!--- Chart Section ---->
    <section>
      <mdb-row class="mt-5">
         <mdb-col md="12" class="mb-4">
            <mdb-card class="mb-4">
            <mdb-card-header> <strong> Trending Artisans and Centers Statistics </strong> </mdb-card-header>
            <mdb-card-body>
              <div style="display: block">
               <mdb-line-chart :data="lineChartData" :options="lineChartOptions" :width="600" :height="300"/>
              </div>
            </mdb-card-body>
             <mdb-card-text class="text-center">
                <Strong>Centers</strong>
           </mdb-card-text>
          </mdb-card>  
          </mdb-col>
         
      </mdb-row>
    </section>
   <section>
      <mdb-row>
       
        <mdb-col xl="3" md="6" class="mb-3">
          <mdb-card class="classic-admin-card  blue accent-2">
            <mdb-card-body>
              <div class="pull-right">
                <img src="~/assets/images/favicon-32x32.png"/>
              </div>
              <p class="white-text">Regulartory Bodies</p>
              <h4><strong>2000</strong></h4>
            </mdb-card-body>
            
            <mdb-card-body>
              <p>Available Regulartory Bodies </p>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
         <mdb-col xl="3" md="6" class="mb-3">
          <mdb-card class="classic-admin-card secondary-color">
            <mdb-card-body>
              <div class="pull-right">
                 <img src="~/assets/images/Assmt bodies icon.png"/>
              </div>
              <p class="white-text">Assesment Bodies</p>
              <h4><strong>2000</strong></h4>
            </mdb-card-body>
           
            <mdb-card-body>
              <p>Available Assesment Bodies</p>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
       
        <mdb-col xl="3" md="6" class="mb-3">
          <mdb-card class="classic-admin-card primary-color">
            <mdb-card-body>
              <div class="pull-right">
                <mdb-icon icon="award"/>
              </div>
              <p class="white-text">Awarding Bodies</p>
              <h4><strong>5000</strong></h4>
            </mdb-card-body>
            
            <mdb-card-body>
              <p>Available Awarding Bodies</p>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>

         <mdb-col xl="3" md="6" class="mb-3">
          <mdb-card class="classic-admin-card red accent-2">
            <mdb-card-body>
              <div class="pull-right">
                  <img src="~/assets/images/licence Icon.png" size="36x36"/>
              </div>
              <p class="white-text">Licensing Bodies</p>
              <h4><strong>6000</strong></h4>
            </mdb-card-body>
          
            <mdb-card-body>
              <p>Avialable Licensing Bodies</p>
            </mdb-card-body>
          </mdb-card>
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
      interval: null,
      lineChartData: {
        labels: ["NUC", "CS-temp", "MTC", "AOU", "TGF", "LUT", "UBC"],
        datasets: [
          {
            label: "Artisans",
            backgroundColor: "rgba(255, 99, 132, 0.1)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 0.7,
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: "Centers",
            backgroundColor: "rgba(151,187,205,0.2)",
            borderColor: "rgba(151,187,205,1)",
            borderWidth: 0.8,
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      }, 
    };
  },
  methods: {
    randomize(arr) {
      return arr.map(value => Math.floor(Math.random()*30));
    },
    changeData(){
      let lineData = {...this.lineChartData};
      lineData.datasets.forEach(dataset => {
        dataset.data = this.randomize(dataset.data);
      });
      this.lineChartData = lineData;
    },
  },
  mounted(){
    this.interval = setInterval(this.changeData, 2000);
  },
  beforeDestroy(){
    window.clearInterval(this.interval);
  }
};
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
  font-size: 20px;
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
.wrapper {
    width: 100%;
    margin: 20px auto;
   
}



</style>
