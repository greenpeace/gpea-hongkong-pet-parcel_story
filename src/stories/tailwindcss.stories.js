import '../styles/index.css';

export default {
  title: 'Tailwindcss',
};

export const SingleInput = () => `
<div class="w-full mt-4">
<label class="form-label">
  Mobile
</label>
<input class="form-field" type="text" placeholder="Mobile" />
<p class="form-warning">
  Form message here about validation.
</p>
</div>
`;

export const DoubleInput = () => `
<div class="w-full mt-4 flex flex-wrap">
<div class="w-full md:w-1/2 md:pr-1">
  <label class="form-label">
    Last Name
  </label>
  <input class="form-field" type="text" placeholder="Chan" />
</div>
<div class="w-full md:w-1/2 md:pl-2">
  <label class="form-label">
    First Name
  </label>
  <input class="form-field" type="text" placeholder="Tai Man" />
</div>
</div>
`;
