<template>
  <div class="animated fadeIn">
    <b-card header-tag="header">
      <div slot="header">
        <i class="icon-drop"></i> Centers Page
      </div>
      <b-card-body>
        <b-row>
        <b-col>
           <div>
              <b-form>
                  <b-form-select
                   @change="changedValue"
                    id="input-3"
                    v-model="form.stateoforign"
                    :options="stateoforign"
                    required
                  ></b-form-select>
                <b-form-select v-model="selectedValue">
                    <option disabled value="">Please select one</option>
                    <option v-for="item in lga" v-bind:key ="item.id" :value="item">{{item}}</option>
                </b-form-select>
              </b-form>
          </div>
        </b-col>
        <b-col>     
          <div class="large-12 medium-12 small-12 cell">
            <label>File Preview
              <input type="file" id="file" ref="file" accept="image/*" v-on:change="handleFileUpload()"/>
            </label>
            <img v-bind:src="imagePreview" v-show="showPreview"/>
            <button v-on:click="submitFile()">Submit</button>
          </div>
          <div id="form">
            <input v-for="item in items" v-bind:key="item.id" v-model="item.value">
            <button @click="addItem">add</button> {{items}}
          </div>

          <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>

          <div id="app" style="text-align: center">
            <img :src="defaultImage" style="width: 100px;height: 100px">
            <VueImageUploadCroppie :defaultImage.sync="defaultImage" :height="100" :width="100" :circle="true" :trans="trans"></VueImageUploadCroppie>
          </div>          
        </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios' 
import VueImageUploadCroppie  from 'vue-image-upload-croppie'
var baseUrl = 'http://127.0.0.1:8080/state_lg/';
  export default {
    name: 'centers',
    data(){
      return {
        items: [{
          value: ''
        }],
        defaultImage: '',
        props: {
          'height': {
              type: Number,
              default: 350
          },
          'circle': { // crop circle or square image
              type: Boolean,
              default: false
          },
          'width': {
              type: Number,
              default: 300
          },
          'trans': { // button text translation
              type: Object,
              default: function() {
                return  { 
                  'cropImage': 'Crop Image', 
                  'chooseImage':'Choose Image', 
                  'confirmCutting': 'Confirm Cutting'
                }
              }
          }
        },
        showPreview: false,
        imagePreview: '',
        file: '',
        form: {
          email: '',
          date:  null,
          name: '',
          stateoforign: null,
          lgarea: null,
          checked: []
        },
        stateoforign: [{ text: 'Select One', value: null },
        'Abia', 
        'Adamawa',
        'Akwa Ibom',
        'Anambra',
        'Bauchi',
        'Bayelsa',
        'Benue',
        'Borno',
        'Cross River',
        'Delta',
        'Ebonyi',
        'Enugu',
        'Edo',
        'Ekiti',
        'Gombe',
        'Imo',
        'Jigawa',
        'Kaduna',
        'Kano',
        'Katsina',
        'Kebbi',
        'Kogi',
        'Kwara',
        'Lagos',
        'Nasarawa',
        'Niger',
        'Ogun',
        'Ondo',
        'Osun',
        'Oyo',
        'Plateau',
        'Rivers',
        'Sokoto',
        'Taraba',
        'Yobe',
        'Zamfara',
        ],
        lga: [{
          value: ''
        }],
        show: true
      }

    },
    created() {
      axios.get('http://127.0.0.1:8080/api/center/getall').then((response) => {
        this.posts = response.data;
        console.log(JSON.stringify(this.post));
      })
      .catch((e) => {
        console.error(e)
      })
    },
    methods: {
      addItem() {
        this.items.push({
          value: ''
        });
      },
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        this.form.fullLegalName = '',
        this.form.acronym = '',
        this.form.nationality = '',
        this.form.legalLatatus = '',
        this.form.officialAddress = '',
        this.form.postalAddress = '',
        this.form.telephone = '',
        this.form.email = '',
        this.form.fullLegalName = '',
        this.form.contactPersonsNumber = '',
        this.form.contactPersonsEmail = '',
        this.form.dateFounded = '',
        this.form.primaryCtivities = '',
        this.form.noPermanentTrainer = '',
        this.form.noAdjunctTrainers = '',
        this.form.noAdminStaff = '',
        this.form.localGovernment = '',
        this.form.state = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })

      },

      createPost: function(){
        alert(JSON.stringify(this.form))
/*         axios.post('http://127.0.0.1:8080/api/center/create', {
        fullLegalName = this.fullLegalName,
        acronym = this.acronym,
        nationality = this.nationality,
        legalLatatus = this.legalLatatus,
        officialAddress = this.officialAddress,
        postalAddress = this.postalAddress,
        telephone = this.telephone,
        email = this.email,
        fullLegalName = this.fullLegalName,
        contactPersonsNumber = this.contactPersonsNumber,
        contactPersonsEmail = this.contactPersonsEmail,
        dateFounded = this.dateFounded,
        primaryCtivities = this.primaryCtivities,
        noPermanentTrainer = this.noPermanentTrainer,
        noAdjunctTrainers = this.noAdjunctTrainers,
        noAdminStaff = this.noAdminStaff,
        localGovernment = this.localGovernment,
        state = this.state
        }).then((response) => {console.error(response)})
        .catch((e) => {
          console.error(e)
        })  */       

      },
      changedValue: function(value){

      var lga = "";
      if(value == 'Abia'){lga = "abia.json"};
      if(value == 'Adamawa'){lga = "adamawa.json"};
      if(value == 'Akwa Ibom'){lga = "akwa_ibom.json"};
      if(value == 'Anambra'){lga = "anambra.json"};
      if(value == 'Bauchi'){lga = "bauchi.json"};
      if(value == 'Bayelsa'){lga = "bayelsa.json"};
      if(value == 'Benue'){lga = "benue.json"};
      if(value == 'Borno'){lga = "borno.json"};
      if(value == 'Cross River'){lga = "cross_river.json"};
      if(value == 'Delta'){lga = "delta.json"};
      if(value == 'Ebonyi'){lga = "ebonyi.json"};
      if(value == 'Enugu'){lga = "enugu.json"};
      if(value == 'Edo'){lga = "edo.json"};
      if(value == 'Ekiti'){lga = "ekiiti.json"};
      if(value == 'Gombe'){lga = "gombe.json"};
      if(value == 'Imo'){lga = "imo.json"};
      if(value == 'Jigawa'){lga = "jigawa.json"};
      if(value == 'Kaduna'){lga = "kaduna.json"};
      if(value == 'Kano'){lga = "kano.json"};
      if(value == 'Katsina'){lga = "katsina.json"};
      if(value == 'Kebbi'){lga = "kebbi.json"};
      if(value == 'Kwara'){lga = "kwara.json"};
      if(value == 'Kogi'){lga = "kogi.json"};
      if(value == 'Lagos'){lga = "lagos.json"};
      if(value == 'Nasarawa'){lga = "nasarawa.json"};
      if(value == 'Niger'){lga = "niger.json"};
      if(value == 'Ogun'){lga = "ogun.json"};
      if(value == 'Ondo'){lga = "ondo.json"};
      if(value == 'Osun'){lga = "osun.json"};
      if(value == 'Oyo'){lga = "oyo.json"};
      if(value == 'Plateau'){lga = "plateau.json"};
      if(value == 'Rivers'){lga = "rivers.json"};
      if(value == 'Sokoto'){lga = "sokoto.json"};
      if(value == 'Taraba'){lga = "taraba.json"};
      if(value == 'Yobe'){lga = "yobe.json"};
      if(value == 'Zamfara'){lga = "zamfara.json"};
      if(value == 'FCT'){lga = "fct.json"};
      axios.get(baseUrl + lga).then((response) => {
        console.log(response.data);
        this.lga = response.data;
      })
      .catch((e) => {
        console.error(e)
      })
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
          }
        }
      }
    
    },
    mounted() {
    },
   watch: {
      defaultImage: function(value) {
          if (value) {
            console.log(value);
            // do whatever you want with image value,(upload ..)
          }
      }
  },
  components: {
    VueImageUploadCroppie
  }

  }
</script>
