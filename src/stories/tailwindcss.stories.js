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

export const Form = () => `
<form class="form-body">
            <div class="mb-8 form-row text-center">
              <h2 class="text-2xl font-bold">Make a change</h2>
              <p class="text-base">
                Stop the destruction of the Arctic
              </p>
            </div>
            <div class="form-row">
              <div class="flex flex-wrap">
                <div class="w-full mb-4 md:mb-0 md:w-1/2 md:pr-1">
                  <label class="form-label">
                    姓氏 Last Name
                  </label>
                  <input
                    class="form-field"
                    type="text"
                    placeholder="姓氏 Last Name"
                  />
                </div>
                <div class="w-full md:w-1/2 md:pl-2">
                  <label class="form-label">
                    名字 First Name
                  </label>
                  <input
                    class="form-field"
                    type="text"
                    placeholder="名字 First Name"
                  />
                </div>
              </div>
            </div>
            <div class="form-row">
              <label for="" class="form-label">
                電郵地址 Email Address
              </label>
              <input
                type="text"
                class="form-field"
                placeholder="電郵地址 Email Address"
              />
            </div>
            <div class="form-row">
              <label class="form-label">
                聯絡電話 Mobile Number
              </label>
              <div class="flex">
                <div class="w-1/5 pr-1">
                  <div class="relative text-gray-500">
                    <span
                      class="pointer-events-none absolute pl-3 left-0 top-0 h-full items-center flex"
                      >+</span
                    >
                    <input
                      class="form-field pl-6"
                      type="text"
                      placeholder="852"
                      value="852"
                    />
                    <div
                      class="invisible pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                    >
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="w-4/5 pl-1">
                  <input
                    class="form-field"
                    type="text"
                    placeholder="聯絡電話 Mobile Number"
                  />
                  <p class="form-warning invisible">
                    Form message here about validation.
                  </p>
                </div>
              </div>
            </div>
            <div class="form-row">
              <label class="form-label">
                出生日期 Birthday
              </label>
              <div class="relative">
                <input
                  class="form-field"
                  type="text"
                  placeholder="DD/MM/YYYY"
                />
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="form-row">
              <label class="flex items-start">
                <input class="mr-2 leading-tight" checked type="checkbox" />
                <span class="form-label">
                  <span class="block text-xs text-gray-600"
                    >我願意收到綠色和平發送的通訊，讓我能掌握環保工作的最新脈動！我同意綠色和平按照<u>個人資料政策</u>與我聯絡，包括提供環保工作資訊及捐款呼籲等。</span
                  >
                </span>
              </label>
            </div>
            <div class="form-row">
              <button class="form-button">
                Sign the petition
              </button>
            </div>
          </form>
`;
