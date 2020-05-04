'use strict';
import 'remove-focus-outline';
import SmoothScroll from 'smooth-scroll';
import Swiper from 'swiper';
import polyfill from 'polyfill';
import * as yup from 'yup';
import axios from 'axios';
import jQuery from 'jquery';
import datepicker from 'js-datepicker';
import 'js-datepicker/dist/datepicker.min.css';
import phoneCode from './phoneNumberCode';
import Cleave from 'cleave.js';
//
polyfill();
window.$ = jQuery;
window.jQuery = jQuery;
//
phoneCode();
const fistNameField = document.querySelector('input[name="FirstName"]');
const mobileField = document.querySelector('input[name="MobilePhone"]');
const birthDateField = document.querySelector('input[name="Birthdate"]');
const phoneCodeCleave = new Cleave('input[name="PhoneCode"]', {
  numericOnly: true,
  prefix: '+',
  delimiter: '',
  blocks: [1, 3],
});
document.querySelector('input[name="PhoneCode"]').value = '+852';

const mobileCleave = new Cleave('input[name="MobilePhone"]', {
  numericOnly: true,
  blocks: [4, 4],
  delimiters: [' '],
});
const birthDateCleave = new Cleave('input[name="Birthdate"]', {
  date: true,
  datePattern: ['d', 'm', 'Y'],
  blocks: [2, 2, 4],
  delimiters: ['/', '/', '/'],
});
//
const picker = datepicker('input[name="Birthdate"]', {
  dateFormat: 'dd/mm/yyyy',
  position: 'tl',
  startDay: 1,
  customDays: ['日', '一', '二', '三', '四', '五', '六'],
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString();
    input.value = value;
  },
  disableMobile: true,
  disableYearOverlay: true,
});
//
document.addEventListener('DOMContentLoaded', function (event) {
  const Scroll = new SmoothScroll('a[href*="#"]');
});

let ruleForm = {};

const validationScheme = yup.object({
  FirstName: yup.string().required('Required'),
  LastName: yup.string().required('Required'),
  Email: yup.string().email().required('Required'),
  MobilePhone: yup.number(),
  Birthdate: yup.date(),
  OptIn: yup.boolean().required('Required'),
});

function postForm() {
  let endPoint = '';
  let formData = new URLSearchParams();
  let mcFields = [
    'LeadSource',
    'PetitionIssueType',
    'CampaignId',
    'UtmSource',
    'DonationPageUrl',
  ];
  mcFields.forEach((s) => {
    formData.append(s, document.querySelector('[name=' + s + ']').value);
    console.log('use', s, document.querySelector('[name=' + s + ']').value);
  });
  //
  formData.append('Email', ruleForm.email);
  formData.append('LastName', ruleForm.lastName);
  formData.append('FirstName', ruleForm.firstName);
  formData.append('MobilePhone', ruleForm.phoneNumber);
  formData.append('Birthdate', ruleForm.birthday);
  formData.append('OptIn', this.ruleForm.moreInfo);
  //
  axios({
    method: 'post',
    url: endPoint,
    data: formData,
  });
}

$(function () {
  $('#form').submit(function (e) {
    e.preventDefault();
    let formData = {
      FirstName: $('input[name="FirstName"]').val(),
      LastName: $('input[name="LastName"]').val(),
      Email: $('input[name="Email"]').val(),
      MobilePhone: $('input[name="MobilePhone"]').val(),
      BirthDate: $('input[name="Birthdate"]').val(),
      OptIn: $('input:checkbox[name="OptIn"]').prop('checked'),
      Company: $('input[name="Company"]').val(),
      PetitionIssueType: $('input[name="PetitionIssueType"]').val(),
      CampaignId: $('input[name="CampaignId"]').val(),
      LeadSource: $('input[name="LeadSource"]').val(),
      UtmMedium: $('input[name="UtmMedium"]').val(),
      UtmSource: $('input[name="UtmSource"]').val(),
      UtmCampaign: $('input[name="UtmCampaign"]').val(),
      UtmContent: $('input[name="UtmContent"]').val(),
      UtmTerm: $('input[name="UtmTerm"]').val(),
      DonationPageUrl: $('input[name="DonationPageUrl"]').val(),
      req: $('input[name="req"]').val(),
    };
    console.log(formData);
    //
    validationScheme.isValid(formData).then(function (valid) {
      valid; // => true
    });
    validationScheme.validate(formData).catch(function (error) {
      console.log(error);
    });
    //
    var url = 'http://cloud.greenhk.greenpeace.org/petition-pp2';
    $.ajax({
      url: url,
      type: 'post',
      data: formData,
      success: function (data) {
        if (data) {
          var response = JSON.parse(data);
          console.log(response);
        } else {
          console.log('error');
        }
      },
      error: function () {
        console.log('error');
      },
    });
  });
});
