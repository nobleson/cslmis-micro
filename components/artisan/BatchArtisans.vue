<template>
 <div class="animated fadeIn">
            <b-link @click="$emit('changeComponent',{component: 'ArtisansListView', id: null})"  href="#" class="card-link"><mdb-icon icon="arrow-left" size="lg" />  Back</b-link>
  <hr>
  <b-row class="justify-content-center" >
  </b-row>
<b-row class="justify-content-center">
  <b-col md="12">
                    <div class="form-wizard"  color="red">
                    <form-wizard @on-complete="onComplete"
                                      :start-index="0"
                                      color="blue">
                    <tab-content title="Step: 1"
                                  icon="icon-user">
                      <!-- Container for V-Modal dialogs <modals-container/> -->
                      <div>
                        <mdb-card class="card-body">
                          <mdb-card-title>Artisans Excel Records</mdb-card-title>
                           <div class="flex-row">
                            <mdb-alert color="info">
                              <h4 class="alert-heading">Notce!</h4>
                              <p>Use the Excel temaplate to prepare and upload the artisans records</p>
                              <hr>
                              <p class="red-text">The selected data properties will overwrite the Excel columns during transformation process</p>
                            </mdb-alert>

                            <mdb-card class="card-body" style="width: 22rem; margin-top: 1rem;">
                              <mdb-card-title>Select Batch Data Properties</mdb-card-title>
                                <b-form>   
                                  <b-form-group  label="Gender:" label-for="gender">

                                <b-form-select 
                                  id="gender"
                                  v-model="form.gender"
                                  required
                                  >
                                  <option disabled value="">[ Select Gender ]</option>
                                  <option  value="Male">Male</option>
                                  <option  value="Female">Female</option>
                                  </b-form-select>
                                  </b-form-group>
                                  <b-form-group  label="State of Residence:" label-for="state">

                                  <b-form-select
                                  v-model="form.stateOfResidence"
                                  required
                                      >
                                  <option disabled value="" selected>[ Select State ]</option>
                                  <option value="Abia">Abia</option>
                                  <option value="Adamawa">Adamawa</option>
                                  <option value="Akwa Ibom">Akwa Ibom</option>
                                  <option value="Anambra">Anambra</option>
                                  <option value="Bauchi">Bauchi</option>
                                  <option value="Bayelsa">Bayelsa</option>
                                  <option value="Benue">Benue</option>
                                  <option value="Borno">Borno</option>
                                  <option value="Cross River">Cross River</option>
                                  <option value="Delta">Delta</option>
                                  <option value="Ebonyi">Ebonyi</option>
                                  <option value="Enugu">Enugu</option>
                                  <option value="Edo">Edo</option>
                                  <option value="Ekiti">Ekiti</option>
                                  <option value="Gombe">Gombe</option>
                                  <option value="Imo">Imo</option>
                                  <option value="Jigawa">Jigawa</option>
                                  <option value="Kaduna">Kaduna</option>
                                  <option value="Kano">Kano</option>
                                  <option value="Katsina">Katsina</option>
                                  <option value="Kebbi">Kebbi</option>
                                  <option value="Kogi">Kogi</option>
                                  <option value="Kwara">Kwara</option>
                                  <option value="Lagos">Lagos</option>
                                  <option value="Nasarawa">Nasarawa</option>
                                  <option value="Niger">Niger</option>
                                  <option value="Ogun">Ogun</option>
                                  <option value="Ondo">Ondo</option>
                                  <option value="Osun">Osun</option>
                                  <option value="Oyo">Oyo</option>
                                  <option value="Plateau">Plateau</option>
                                  <option value="Rivers">Rivers</option>
                                  <option value="Sokoto">Sokoto</option>
                                  <option value="Taraba">Taraba</option>
                                  <option value="Yobe">Yobe</option>
                                  <option value="Zamfara">Zamfara</option>
                                  <option value="FCT">FCT</option>
                                  </b-form-select>
                                  </b-form-group>
                                  <b-form-group  label="Trade:" label-for="trade">

                                  <b-form-select 
                                    id="trade"
                                    v-model="form.trade"
                                    required
                                    >
                                    <option disabled value="">[ Select Trade ]</option>
                                    <option  value="Automobile">Automobile</option>
                                    <option  value="Electrical Installation">Electrical Installation</option>
                                    <option  value="Paintiing and Decoration">Paintiing and Decoration</option>
                                    <option  value="Welding and Fabrication">Welding and Fabrication</option>
                                    <option  value="Carpentry and Joinery">Carpentry and Joinery</option>
                                    <option  value="Masonry">Masonry</option>
                                    <option  value="Plumbing and Pipefitting">Plumbing and Pipefitting</option>
                                    </b-form-select>
                                  </b-form-group>
                                  <b-form-group  label="Center of Graduation:" label-for="trainingProvider">
                                  <b-form-select 
                                  id="trainingProvider"
                                  v-model="form.centerOfGraduation"
                                  required
                                  >
                                  <option disabled value="">[ Select Center of Graduation ]</option>
                                  <option v-for="provider in trainingProviders" v-bind:key ="provider.id" :value="provider.fullLegalName">{{provider.fullLegalName}}</option>
                                  </b-form-select>
                                </b-form-group>
                                  <b-form-group  label="Competency Level:" label-for="nsq">

                                <b-form-select 
                                  id="nsq"
                                  v-model="form.competencyLevel"
                                  required
                                  >
                                  <option disabled value="">[ Select Compentency Level ]</option>
                                  <option  value="NSQ LEVEL 1">NSQ LEVEL 1</option>
                                  <option  value="NSQ LEVEL 2">NSQ LEVEL 2</option>
                                  <option  value="NSQ LEVEL 3">NSQ LEVEL 3</option>
                                  <option  value="NSQ LEVEL 4">NSQ LEVEL 4</option>
                                  <option  value="NSQ LEVEL 5">NSQ LEVEL 5</option>
                                  <option  value="NSQ LEVEL 6">NSQ LEVEL 6</option>
                                  </b-form-select>
                                  </b-form-group>
                                </b-form>
                            </mdb-card>


                            <input type="file" ref="fileInput" style="display: none" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"  v-on:change="onFileChange">
                            <b-button type="button" variant="primary" v-on:click="onPickFile">Upload Excel Sheet</b-button>
                          </div>
                          <hr />
                          <div cols="12">
                            <h5 class="text-center">Artisans Personal Details</h5>
                            <mdb-tbl style="overflow-y: auto; overflow-x: auto">
                                <mdb-datatable
                                  :data="processArtisans"
                                  striped
                                  bordered
                                  materialInputs
                                  /> 
                            </mdb-tbl>  
                          </div>
                        </mdb-card>                
                      </div>
                    </tab-content>
                    <tab-content title="Step: 2"
                                  icon="icon-user">
                      <!-- Container for V-Modal dialogs <modals-container/> -->
                      <div>
                        <mdb-card class="card-body">
                          <mdb-card-title>Artisans Passports</mdb-card-title>
                          <mdb-card-text>Image name must match with artisans records on serial numbers</mdb-card-text>
                          <div class="large-12 medium-12 small-12 cell">
                            <p class="text-danger">Files size more than 50KB will not be uploaded</p>
                            <label>
                              <input type="file" id="files" ref="file_input" accept="image/x-png,image/gif,image/jpeg"  multiple v-on:change="handleFileUploads()"/>
                            </label>
                            <h4 v-if="getEventStatus">Names</h4>
                            <ul>
                              <li v-for="file in files" :key="file.id">
                                 <span>{{ file.number }}</span> <span>  {{ file.name }}</span>
                              </li>
                            </ul>
                            <h4 v-if="getEventStatus">Size</h4>
                            <ul>
                              <li v-for="file in files" :key="file.id">
                                 <span>{{ file.number }}</span> <span>  {{ file.size }}</span><span class="text-danger">  {{ file.status }}</span>
                              </li>
                            </ul>
                            <div  v-if="getEventStatus">
                              <h4>Total Files</h4>
                              <h5>{{totalFileSize}}</h5>
                               <b-button v-on:click="removeAllFiles()">Remove All</b-button>
                              </div>
                          </div>
                        </mdb-card>                
                      </div>
                    </tab-content>

                    <tab-content title="Step: 3"
                                  icon="icon-pencil">
                        <div>
                        <mdb-card class="card-body">
                          <mdb-card-title>Artisans List</mdb-card-title>
                          <mdb-card-text>Final list of artisans information</mdb-card-text>
                          <div class="flex-row">
                           <h5> Found [{{artisansMasterDataSet.rows.length}}] Artisans</h5>
                            <b-button type="button" variant="primary" v-on:click="processArtisansPreview()">Load Preview</b-button>
                          </div>
                          <hr/>
                          <div>
                            <mdb-tbl style="overflow-y: auto; overflow-x: auto">
                            <mdb-datatable
                              :data="artisansMasterDataSet"
                              bordered
                              arrows
                              responsive
                              autoWidth
                              :searching="false"
                              headerColor="default"
                              headerWhite
                              :pagination="false"
                              :tfoot="false"
                              :sorting="false"
                              cols="12"
                            />
                            </mdb-tbl>  
                          </div>
                        </mdb-card>   
                        </div>
                    </tab-content>
                    <tab-content title="Step: 4"
                                  icon="icon-pencil">
                        <div>
                        <mdb-card class="card-body">
                          <mdb-card-title>Artisans Batching</mdb-card-title>
                          <mdb-card-text class="text-danger">Final batch process, you can not revert once submitted.</mdb-card-text>
                            <div>
                              <b-alert v-if="errorOcurred" show variant="danger"><a href="#" class="alert-link"><strong>Error!</strong>  Batch processs aborted. Please reload and try again</a></b-alert>
                              <b-alert v-if="isCompleted" show variant="primary"><a href="#" class="alert-link"><strong>Success!</strong>  Batching completed</a></b-alert>
                            </div>
                            <b-progress v-if="isBatchReady" :max="max" height="2rem" variant="success">
                              <b-progress-bar :value="value" :label="`${((value / max) * 100).toFixed(2)}%`">
                              </b-progress-bar>
                            </b-progress>
                           <hr/> 
                          <div class="flex-row">
                            <b-button type="button" variant="primary" @click="processBatch()"   :disabled='isButtonDisabled'>Start Batching
                               <b-spinner small v-if="isButtonDisabled === true"></b-spinner>
                                <span class="sr-only" v-if="isButtonDisabled === true">Wait...</span>     
                            </b-button>
                          </div>
                        </mdb-card>                             
                        </div>
                    </tab-content>
                  </form-wizard>
                    </div>
  </b-col>
  </b-row>
  </div>
</template>

<script> 
import XLSX from 'xlsx';
import * as firebase from 'firebase/app'
import 'firebase/storage'
import  uuidv4 from 'uuid/v4';
import datepicker from 'vue-date-picker'
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
import { clipperBasic } from 'vuejs-clipper'
import { mdbCard, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardGroup, mdbInput,mdbRow, mdbCol,mdbTbl,mdbDatatable,mdbIcon,mdbAlert} from 'mdbvue';
import { URL } from 'url';
const firebaseConfig = {
    apiKey: "AIzaSyA73Wdeedk01ZoL-oWX08r5UxWing28knM",
    authDomain: "cslmis-admin.firebaseapp.com",
    databaseURL: "https://cslmis-admin.firebaseio.com",
    projectId: "cslmis-admin",
    storageBucket: "gs://cslmis-admin-bucket",
    messagingSenderId: "263391859932",
    appId: "1:263391859932:web:4a6a7871600a3acd"
  };
  
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : '' 

  export default {
    
    name: 'new-artisan',
     components: { 
       mdbAlert,
      mdbDatatable,
      datepicker,
      mdbRow,
      mdbCol,
      clipperBasic,
      mdbCard,
      mdbTbl,
      mdbCardBody,
      mdbCardGroup,
      mdbCardTitle,
      mdbCardText,
      mdbInput ,
      mdbIcon   
     },
    data() {
      return {
        value: 0,
        max: 0,
        timer: null,
        isButtonDisabled: false,
        isCompleted: false,
        errorOcurred: false,
        isBatchReady: false,
        uploadCompleted: false,
        files: [],
        images: [],
        fileData: null,
        filesLoaded: false,
        totalFileSize: 0,
        photoUrl: '',
        form: {
          gender: '',
          stateOfResidence: '',
          trade: '',
          centerOfGraduation: '',
          competencyLevel: ''
        },
        artisanPersona: {},
        artisansDataSet: {
          columns: [
            {
              label: 'S/N',
              field: 'sn',
              sort: 'asc'
            },
            {
              label: 'First Name',
              field: 'firstName',
              sort: 'asc'
            },
            {
              label: 'Middle Name',
              field: 'middleName',
              sort: 'asc'
            },
            {
              label: 'Last Name',
              field: 'lastName',
              sort: 'asc'
            },
            {
              label: 'Gender',
              field: 'gender',
              sort: 'asc'
            },
            {
              label: 'Date of Birth',
              field: 'dateOfBirth',
              sort: 'asc'
            },
            {
              label: 'Disability Type',
              field: 'disabilityType',
              sort: 'asc'
            },
            {
              label: 'Phone Number',
              field: 'phoneNumber',
              sort: 'asc'
            },
            {
              label: 'Email Address',
              field: 'emailAddress',
              sort: 'asc'
            },
            {
              label: 'Contact Address',
              field: 'contactAddress',
              sort: 'asc'
            },
            {
              label: 'City of Residence',
              field: 'cityOfResidence',
              sort: 'asc'
            },
            {
              label: 'State of Residence',
              field: 'stateOfResidence',
              sort: 'asc'
            },
            {
              label: 'Center of Graduation',
              field: 'centerOfGraduation',
              sort: 'asc'
            },
            {
              label: 'Trade',
              field: 'trade',
              sort: 'asc'
            },
            {
              label: 'Unique Learners Number',
              field: 'uniqueLearnersNumber',
              sort: 'asc'
            },
            {
              label: 'Competency Level',
              field: 'competencyLevel',
              sort: 'asc'
            }
          ],     
          rows: []
        },
        artisansMasterDataSet: {
          columns: [
            {
              label: 'Photo',
              field: 'avatar',
              sort: 'asc'
            },
            {
              label: 'Bio Data',
              field: 'persona',
              sort: 'asc'
            }
          ],
          rows: []
        }
      }
     },
    beforeDestroy() {
      clearInterval(this.timer)
      this.timer = null
    },
    mounted(){
      this.loadTrainingProviders();
    },
    computed: {
        ...mapGetters({trainingProviders: 'program/getTraininProviders',successState: 'artisan/getSuccessState',errorState: 'artisan/getErrorState',localgovernment: 'artisan/getLocalGovernment',personaId: 'artisan/getArtisanId'}),
        getEventStatus(){
          if( this.totalFileSize  > 0){
           return this.filesLoaded = true; 
          }
          return this.filesLoaded;
        },
        processArtisans(){
          return this.artisansDataSet;
        }
  //v-if="artisansDataSet.length > 0"
     },
    methods: {
      ...mapActions({registerArtisan: 'artisan/registerArtisan',loadProviders: 'program/loadTrainingProviders'}),
      batchAtisans(i){

          var imageObj = this.images[i] 
          
          this.artisanPersona = this.artisansDataSet.rows[i]

              if(typeof this.artisanPersona !== 'undefined'){
              
              if(typeof this.artisanPersona.emailAddress !== 'undefined'){
                  let date = new Date()
                  let artisan = {
                    firstName: this.artisanPersona.firstName,
                    middleName: this.artisanPersona.middleName,
                    lastName: this.artisanPersona.lastName,
                    gender: this.artisanPersona.gender,
                    dateOfBirth: this.artisanPersona.dateOfBirth,
                    disabilityType: this.artisanPersona.disabilityType,
                    phoneNumber: "+234"+this.artisanPersona.phoneNumber.replace(/^0+/, ''),
                    emailAddress: this.artisanPersona.emailAddress,
                    contactAddress: this.artisanPersona.contactAddress,
                    cityOfResidence: this.artisanPersona.cityOfResidence,
                    stateOfResidence: this.artisanPersona.stateOfResidence,
                    centerOfGraduation: this.artisanPersona.centerOfGraduation,
                    trade: this.artisanPersona.trade,
                    uniqueLearnersNumber: this.artisanPersona.uniqueLearnersNumber,
                    competencyLevel: this.artisanPersona.competencyLevel,
                    dateRegistered: date,
                    photo: this.photoUrl
                }
                this.storePhotoOnFirebase(imageObj.base64,artisan); 
              }
          }
      },
      processBatch(){
         this.isButtonDisabled = true
         this.uploadCompleted = !this.this.uploadCompleted
        this.timer = setInterval(() => {
          if(this.value == this.max && this.value > 0){
             this.isCompleted = true
             this.isButtonDisabled = false
              clearInterval(this.timer)
              this.timer = null
          }else{
            if(this.uploadCompleted){
             this.batchAtisans(this.value);
            }
          }
        }, 2000)
      },
      stopBatchProcess(){
        this.errorOcurred = true
        clearInterval(this.timer)
        this.timer = null
      },
      setNextValue(){
        this.uploadCompleted = !this.uploadCompleted
        this.value ++
      },
     loadTrainingProviders(){
        this.loadProviders().then((ev) => {})
      },
      processArtisansPreview(){ 
        for(var i = 0; i < this.totalFileSize; i++ ){
          var imageObj = this.images[i]
          this. artisanPersona = this.artisansDataSet.rows[i]
          var obj = {
            avatar: '<img class="img-fluid rounded-circle" style="max-width: 80px;" src="'+imageObj.base64+'"/>',
            
            persona: '<ul>'+
            '<li>'+this.artisanPersona.sn+'</li>'+
            '<li>'+this.artisanPersona.firstName+'</li>'+
            '<li>'+this.artisanPersona.middleName+'</li>'+
            '<li>'+this.artisanPersona.lastName+'</li>'+
            '<li>'+this.artisanPersona.gender+'</li>'+
            '<li>'+this.artisanPersona.dateOfBirth+'</li>'+
            '<li>'+this.artisanPersona.disabilityType+'</li>'+
            '<li>'+this.artisanPersona.phoneNumber+'</li>'+
            '<li>'+this.artisanPersona.emailAddress+'</li>'+
            '<li>'+this.artisanPersona.contactAddress+'</li>'+
            '<li>'+this.artisanPersona.cityOfResidence+'</li>'+
            '<li>'+this.artisanPersona.stateOfResidence+'</li>'+
            '<li>'+this.artisanPersona.centerOfGraduation+'</li>'+
            '<li>'+this.artisanPersona.trade+'</li>'+
            '<li>'+this.artisanPersona.uniqueLearnersNumber+'</li>'+
            '<li>'+this.artisanPersona.competencyLevel+'</li>'+
            '</ul>',
          }

          this.artisansMasterDataSet.rows.push(obj);
        }
        

        return this.artisansMasterDataSet;
      },
      removeAllFiles: function(){
          this.$refs.file_input.value = "";
          this.totalFileSize = 0;
          this.files = [];
          this.images = [];
          this.filesLoaded = !this.filesLoaded;
      },
      handleFileUploads: function () {

          var files = this.$refs.file_input.files;
          var status = "over large"
          this.fileData = new FormData();
          var count = 0;
          var fileSize = 0;
          this.totalFileSize = files.length;
          

        for (var i = 0; i< files.length; i++) {
            count++
               this.fileData.append('input_name[]', files[i])
              fileSize = files[i].size / 1000
            if(fileSize < 50){
              status = "Ok"
            }
            this.files.push({number: count,name: files[i].name,size: fileSize,status: status})
          }
        for (var i = 0; i< files.length; i++) {

              const fileReader =  new FileReader()
              fileReader.addEventListener('load',() =>{
                 this.images.push({base64: fileReader.result})
              })
              fileReader.readAsDataURL(files[i])
            
          }
         //this.files = this.fileData.getAll('input_name[]')
         //this.myFunction();
        },
        dataURItoBlob: function(dataURI) {
            // convert base64/URLEncoded data component to raw binary data held in a string
            var byteString;
            if (dataURI.split(',')[0].indexOf('base64') >= 0)
                byteString = atob(dataURI.split(',')[1]);
            else
                byteString = unescape(dataURI.split(',')[1]);
            // separate out the mime component
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            // write the bytes of the string to a typed array
            var ia = new Uint8Array(byteString.length);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            return new Blob([ia], {type:mimeString});
        },
       sendFormData: function(){
          var formData = new FormData();
          var dataURL = base64Image;
          var blob = dataURItoBlob(dataURL);
          formData.append("fileUpload", blob, "filename.jpg");
          var request = new XMLHttpRequest();
          request.open("POST", "./upload");
          request.send(formData);
        },
      storePhotoOnFirebase(base64,artisan) {
        let image  =  this.dataURItoBlob(base64)

        let uuid = uuidv4();
         let logoURL = ''
         const metadata = { contentType: image.type };
         const task = firebase.app().storage().ref('profile/'+uuid+".png").put(image, metadata);
         return task.then(snapshot => snapshot.ref.getDownloadURL()).then(url => this.getPhotoUrl(url)).then(k => this.registerArtisan(artisan)).then(e => this.setNextValue()).catch(e => this.stopBatchProcess());  

      },
      getPhotoUrl(url){
        if(url.length > 0){
          this.uploadCompleted = !this.uploadCompleted
          return this.photoUrl = url
        }
        return this.photoUrl;
      },
      onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.processExcel(files[0]);
      },
      processExcel(file) {
        var reader = new FileReader();

        reader.onload = (e) => {
          var data = new Uint8Array(e.target.result);
          var workbook = XLSX.read(data, {type: 'array'});
          var first_sheet_name = workbook.SheetNames[0];
          var worksheet = workbook.Sheets[first_sheet_name];

          let arrayOfRows = XLSX.utils.sheet_to_json(worksheet, {header: 1})

             
          for(var i = 1; i<= arrayOfRows.length -1; i++) {

            if (typeof arrayOfRows[i][0] !== 'undefined'){

            let artisanObject = {
              sn: `${arrayOfRows[i][0]}`,
              firstName: `${arrayOfRows[i][1]}`,
              middleName: `${arrayOfRows[i][2]}`,
              lastName: `${arrayOfRows[i][3]}`,
              gender: this.form.gender,
              dateOfBirth: `${arrayOfRows[i][5]}`,
              disabilityType: `${arrayOfRows[i][6]}`,
              phoneNumber: `${arrayOfRows[i][7]}`,
              emailAddress: `${arrayOfRows[i][8]}`,
              contactAddress: `${arrayOfRows[i][9]}`,
              cityOfResidence: `${arrayOfRows[i][10]}`,
              stateOfResidence: this.form.stateOfResidence,
              centerOfGraduation: this.form.centerOfGraduation,
              trade: this.form.trade,
              uniqueLearnersNumber: `${arrayOfRows[i][14]}`,
              competencyLevel: this.form.competencyLevel
            };

            this.artisansDataSet.rows.push(artisanObject);
            }
          }
          this.max = this.artisansDataSet.rows.length;
          if(this.max > 0){
            this.isBatchReady = true
          }
          console.log("total number of artisans:"+this.artisansDataSet.rows.length)
        };
        reader.readAsArrayBuffer(file);
      },

      //call axios here to do your magic.
      loopThrough() {
        this.excelData.forEach(e => {
          //now e is an array of three objects
          console.log(e[0]) //logs the object for surname firstname and lastname.
          console.log(e[1]) //logs the object for center
          console.log(e[2])// logs the object for the last
        })
      },

      onPickFile(){

        if(!this.form.gender){
           this.$bvModal.msgBoxOk('Gender is required.')
          return false
        }
        else if(!this.form.stateOfResidence){
         this.$bvModal.msgBoxOk('State of residence is required.')
          return false
        }
        else if(!this.form.trade){
         this.$bvModal.msgBoxOk('Trade is required.')
          return false
        }
        else if(!this.form.centerOfGraduation){
         this.$bvModal.msgBoxOk('Center of graduation is required.')
          return false
        }
        else if(!this.form.competencyLevel){
         this.$bvModal.msgBoxOk('Competency level is required.')
          return false
        }else{
        this.$refs.fileInput.click()
        }
      },
      onFilePicked(event){

        let files = event.target.files
        let filename = files[0].name;
        if(filename.lastIndexOf('.') <= 0){
          alert('please enter a valid file')
        }
        const fileReader =  new FileReader()
        fileReader.addEventListener('load',() =>{
          this.resultURL = fileReader.result
        })
        fileReader.readAsDataURL(files[0])
        this.image = files[0]
      },
      removeEducation(index) {
        //you can warn the user before remove the education qualification
        this.educationForm.education.splice(index,1)
      },
      removeApprentiship(index) {
        //you can warn the user before remove the education qualification
        this.apprentishipForm.apprentiship.splice(index,1)
      },

      onReset() {
          this.personaForm.surname = '',
          this.personaForm.middleName ='',
          this.personaForm.otherName = '',
          this.personaForm.dateOfBirth ='',
          this.personaForm.gender ='',
          this.personaForm.placeOfBirth = '',
          this.personaForm.permanentAddress = '',
          this.personaForm.phoneNumber =  '',
          this.personaForm.emailAddress = '',
          this.personaForm.state_origin = null,
          this.personaForm.local_government = '',
          this.personaForm.nationality =  '',
          this.personaForm.photo = ''

        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
     onComplete: function(){
          this.$router.go();
     },
     changedValue(){
        this.fetchLocalGovernment(this.personaForm.state_origin).then(e => { 
          console.log('Local government fetched'); 
        });            
     },
    submitFile(){
        /*
                Initialize the form data
            */
            let formData = new FormData();

            /*
                Add the form data we need to submit
            */
            formData.append('file', this.file);

        /*
          Make the request to the POST /single-file URL
        */
            axios.post( '/single-file',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
      },

      /*
        Handles a change on the file upload
      */
      handleFileUpload(){
        /*
          Set the local file variable to what the user has selected.
        */
        this.file = this.$refs.file.files[0];

        /*
          Initialize a File Reader object
        */
        let reader  = new FileReader();

        /*
          Add an event listener to the reader that when the file
          has been loaded, we flag the show preview as true and set the
          image to be what was read from the reader.
        */
        reader.addEventListener("load", function () {
          this.showPreview = true;
          this.imagePreview = reader.result;
          console.log("Base64:"+reader.result);            

        }.bind(this), false);

        /*
          Check to see if the file is not empty.
        */
        if( this.file ){
          /*
            Ensure the file is an image file.
          */
          if ( /\.(jpe?g|png|gif)$/i.test( this.file.name ) ) {
            /*
              Fire the readAsDataURL method which will read the file in and
              upon completion fire a 'load' event which we will listen to and
              display the image in the preview.
            */
            reader.readAsDataURL( this.file );
            this.testimonialImage = this.file 
         // var base64 = this.getBase64Image(document.getElementById("imagePreview"));
          }
        }
      },
      getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
      }

    }
     
}

</script>
<style scoped>
    .my-clipper {
        width: 100%;
        max-width: 700px;
    }

    .placeholder {
        text-align: center;
        padding: 20px;
        background-color: lightgray;
    }
</style>
