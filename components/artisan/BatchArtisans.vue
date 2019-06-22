<template>
 <div class="animated fadeIn">
            <b-link @click="$emit('changeComponent',{component: 'ArtisansListView', id: null})"  href="#" class="card-link"><mdb-icon icon="arrow-left" size="lg" />  Back</b-link>
  <hr>
  <b-row class="justify-content-center" >
  </b-row>
<b-row class="justify-content-center">
  <b-col md="10">
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
                          <mdb-card-text>Prepare and upload the Artisans records in Excel worksheet</mdb-card-text>
                           <div class="flex-row">
                                <p class="text-danger">Worksheet Template Format: </p>
                                 <mdb-row style="background: gray;">
                                  <mdb-col class="align-self-start">Surname</mdb-col>
                                  <mdb-col class="align-self-center">Middle Name</mdb-col>
                                  <mdb-col class="align-self-end">Other Name</mdb-col>
                                  <mdb-col class="align-self-center">Training Center Number</mdb-col>
                                  <mdb-col class="align-self-center">Center Name</mdb-col>
                                  <mdb-col class="align-self-end">Apprentiship Place</mdb-col>
                                  <mdb-col class="align-self-end">Supervisor Name</mdb-col>
                                  <mdb-col class="align-self-end">Supervisor Phone Number</mdb-col>
                                  <mdb-col class="align-self-end">Apprentice Performance</mdb-col>
                                </mdb-row>

                            <input type="file" ref="fileInput" style="display: none" v-on:change="onFileChange">
                            <b-button type="button" variant="primary" v-on:click="onPickFile">Upload Excel Sheet</b-button>
                          </div>
                          <hr />
                          <div cols="12">
                            <h5 class="text-center">Artisans Personal Details</h5>
                           <mdb-datatable 
                              :data="processArtisans"
                              striped
                              bordered
                              materialInputs
                            />
                          </div>
                          <div cols="12">
                            <h5 class="text-center">Artisans Training Provider Details</h5>
                           <mdb-datatable 
                              :data="processArtisansProvider"
                              striped
                              bordered
                              materialInputs
                            />
                          </div>
                          <div cols="12">
                            <h5 class="text-center">Artisans Apprentiship Details</h5>
                           <mdb-datatable 
                              :data="processArtisansApprentiship"
                              striped
                              bordered
                              materialInputs
                            />
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
                          <mdb-card-text>Some quick example text to build on the panel title and make up the bulk of the panel's content.</mdb-card-text>
                          <div class="large-12 medium-12 small-12 cell">
                            <p class="text-danger">Files size more than 50KB will not be uploaded</p>
                            <label>
                              <input type="file" id="files" ref="file_input"  multiple v-on:change="handleFileUploads()"/>
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
                          </div>
                        </mdb-card>   
                        </div>
                    </tab-content>
                    <tab-content title="Step: 4"
                                  icon="icon-pencil">
                        <div>
                        <mdb-card class="card-body">
                          <mdb-card-title>Artisans Batch</mdb-card-title>
                          <mdb-card-text class="text-danger">Final batch process, you can not revert once submitted.</mdb-card-text>
                           <hr/> 
                          <div class="flex-row">
                            <b-button type="button" variant="primary">Submit Batch</b-button>
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
import { mdbCard, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardGroup, mdbInput,mdbRow, mdbCol,mdbTbl,mdbDatatable } from 'mdbvue';
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
      mdbInput    
     },
    data() {

      return {
        files: [],
        images: [],
        fileData: null,
        filesLoaded: false,
        totalFileSize: 0,
        artisansDataSet: {
          columns: [
            {
              label: 'Surname',
              field: 'surname',
              sort: 'asc'
            },
            {
              label: 'Middle Name',
              field: 'firstname',
              sort: 'asc'
            },
            {
              label: 'Other Name',
              field: 'lastname',
              sort: 'asc'
            }
          ],     
          rows: []
        },
        providerDataSet: {
          columns: [
            {
              label: 'Center Number',
              field: 'centernumber',
              sort: 'asc'
            },
            {
              label: 'Center Name',
              field: 'centername',
              sort: 'asc'
            }
          ],     
          rows: []
        },
        apprentishipDataSet: {
          columns: [
            {
              label: 'Apprentiship Place',
              field: 'apprentishipplace',
              sort: 'asc'
            },
            {
              label: 'Supervisor Name',
              field: 'supervisior',
              sort: 'asc'
            },
            {
              label: 'Supervisor Phone Number',
              field: 'supervisornumber',
              sort: 'asc'
            },
            {
              label: 'Apprentiship Status',
              field: 'apprentishipstatus',
              sort: 'asc'
            },
            {
              label: 'Apprentice Performance',
              field: 'performance',
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
            },
            {
              label: 'Provider',
              field: 'provider',
              sort: 'asc'
            },
            {
              label: 'Apprentiship',
              field: 'apprentiship',
              sort: 'asc'
            },
          ],
          rows: []
        }

      }
     },
    computed: {
        ...mapGetters({successState: 'artisan/getSuccessState',errorState: 'artisan/getErrorState',localgovernment: 'artisan/getLocalGovernment',personaId: 'artisan/getArtisanId'}),
        getEventStatus(){
          if( this.totalFileSize  > 0){
           return this.filesLoaded = true; 
          }
          return this.filesLoaded;
        },
        processArtisans(){
          return this.artisansDataSet;
        },
        processArtisansProvider(){
          return this.providerDataSet;
        },
        processArtisansApprentiship(){
          return this.apprentishipDataSet;
        }

  //v-if="artisansDataSet.length > 0"
     },
    methods: {
      ...mapActions({addPersona: 'artisan/addPersona',fetchLocalGovernment: 'artisan/loadLocalGovernment',addCenter: 'artisan/addCenter',addEmployment: 'artisan/addEmployment',addEducation: 'artisan/addEducation',addApprentiship: 'artisan/addApprentiship'}),
      getResult: function () {
          let imageUrl;
          let uuid = uuidv4();
          const canvas = this.$refs.clipper.clip();//call component's clip method
          this.resultURL = canvas.toDataURL("image/jpg", 1);//canvas->image
          this.isImageCliped = true;

          let filename = this.image.name
          const metadata = { contentType: this.image.type };
          let ext = filename.slice(filename.lastIndexOf('.'))
          const task = firebase.app().storage().ref('profile/'+uuid+"."+ext).put(this.image, metadata);
          task.then(snapshot => snapshot.ref.getDownloadURL())
         .then(function(url){this.personaForm.photo = url; console.log("testimonialImage:"+url)})
         .catch(console.error);

      },
      processArtisansPreview(){
        for(var i = 0; i < this.totalFileSize; i++ ){
          var imageObj = this.images[i]
          var artisanPersona = this.artisansDataSet.rows[i]
          var artisanProvider = this.providerDataSet.rows[i]
          var artisanApprentiship = this.apprentishipDataSet.rows[i] 
          var obj = {
            avatar: '<img class="img-fluid rounded-circle" style="max-width: 80px;" src="'+imageObj.base64+'"/>',
            persona: '<ul><li>'+artisanPersona.surname+'</li><li>'+artisanPersona.firstname+'</li><li>'+artisanPersona.lastname+'</li></ul>',
            provider: '<ul><li>'+artisanProvider.centernumber+'</li><li>'+artisanProvider.centername+'</li></ul>',
            apprentiship: '<ul><li>'+artisanApprentiship.apprentishipplace+'</li><li>'+artisanApprentiship.supervisior+'</li><li>'+artisanApprentiship.supervisornumber+'</li><li>'+artisanApprentiship.apprentishipstatus+'</li><li>'+artisanApprentiship.performance+'</li></ul>',
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
                 this.images.push({image: files[i],base64: fileReader.result})
              })
              fileReader.readAsDataURL(files[i])
            
          }
         //this.files = this.fileData.getAll('input_name[]')
         //this.myFunction();
        },
        createAvatarObject(files, boa){
           this.images.push({base64: boa})
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
      storePhoto: function () {
          let uuid = uuidv4();
          let filename = this.image.name
          const metadata = { contentType: this.image.type };
          let ext = filename.slice(filename.lastIndexOf('.'))
          const task = firebase.app().storage().ref('profile/'+uuid+"."+ext).put(this.image, metadata);
          task.then(snapshot => snapshot.ref.getDownloadURL())
         .then(function(url){this.personaForm.photo = url; console.log("testimonialImage:"+url)})
         .catch(console.error);
      },
      storeTestimonial: function () {
          let uuid = uuidv4();

          let filename = this.testimonialImage.name
          const metadata = { contentType: this.testimonialImage.type };
          let ext = filename.slice(filename.lastIndexOf('.'))
          const task = firebase.app().storage().ref('profile/'+uuid+"."+ext).put(this.testimonialImage, metadata);
          task.then(snapshot => snapshot.ref.getDownloadURL())
         .then(function(url){this.apprentishipForm.certificateTestimonial = url; console.log("testimonialImage:"+url)}
         )
         .catch(console.error);
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

          for(var i = 0; i<= arrayOfRows.length-1; i++) {
            let pObj = {
              surname: `${arrayOfRows[i][0]}`,
              firstname: `${arrayOfRows[i][1]}`,
              lastname: `${arrayOfRows[i][2]}`,
            };

            let centerObj = {
              centername: `${arrayOfRows[i][3]}`
            };

            let artObj = {
              //forgot what the last property name is, hence named it art.
              apprentishipplace: `${arrayOfRows[i][4]}`
            };
            this.artisansDataSet.rows.push(pObj);
            this.providerDataSet.rows.push(centerObj);
            this.apprentishipDataSet.rows.push(artObj);

          }
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
        this.$refs.fileInput.click()
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
          alert('Yay. Done!');
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
