<template>
  <div class="home">
    <main>
      <h1 сlass="step" style="color: #351768; font-weight: 800;">{{step}}</h1>
      <form id="form" onsubmit="return false">
        <div class="form" v-show="step === 'Шаг 1'">
          <h1 class="form__parts__barrier">Информация об организаторе</h1>
          <my-input
                  v-model="formData.data.org.values"
                  placeholder="Название"
                  :input="formData.data.org"
                  :nameInput="'org'"
                  :label="'Организатор'"
                  :typeInput="'text'"
                  :minlength="1"
                  :maxlength="1000"
          />
        <h1 class="form__parts__barrier">Контактные данные</h1>
        <div class="contacts-row">
          <my-input
                  v-model="formData.data.tel.values"
                  placeholder="Название"
                  :input="formData.data.tel"
                  :nameInput="'tel'"
                  :label="'Телефон'"
                  :typeInput="'tel'"
                  :minlength="12"
                  :maxlength="12"
          />
          <my-input

                  v-model="formData.data.email.values"
                  placeholder="Название"
                  :input="formData.data.email"
                  :nameInput="'email'"
                  :label="'Email'"
                  :typeInput="'email'"
                  :minlength="1"
                  :maxlength="1000"
          />
          <my-input
                  v-model="formData.data.city.values"
                  placeholder="Название"
                  :input="formData.data.city"
                  :nameInput="'city'"
                  :label="'Город организатора'"
                  :typeInput="'text'"
                  :minlength="1"
                  :maxlength="1000"
          />
        </div>
        <h1 class="form__parts__barrier">Общая информация</h1>
        <my-input
                v-model="formData.data.name.values"
                placeholder="Название"
                :input="formData.data.name"
                :nameInput="'name'"
                :label="'Название'"
                :typeInput="'text'"
                :minlength="1"
                :maxlength="1000"
        />
        <my-photo
                v-model="formData.url"
                :url="formData.url"
                @remove="removePhoto"
        />
        <my-input
                v-model="formData.data.descr.values"
                placeholder="Название"
                :input="formData.data.descr"
                :nameInput="'descr'"
                :label="'Подробное описание'"
                :typeInput="'text'"
                :minlength="1"
                :maxlength="5000"
        />
        <EventRow
                v-for="inputs in formData.events.slice().reverse()"
                :key="inputs.id"
                v-model="formData.events[inputs.id]"
                :input="inputs"
                @remove="removeDate"
        />
        <button
                class="btn__date__add"
                @click="addDate"
        >
          + Добавить Дату
        </button>
        <div class="date__and__rating">
          <my-select
                  v-model="formData.data.rating.values"
                  placeholder="Название"
                  :input="formData.data.rating"
                  style="margin-right: 2%"
                  :name="'rating'"
                  :label="'Рейтинг'"
                  :typeInput="'number'"
                  :minlength="1"
                  :maxlength="3"
          />
          <my-input
                  v-model="formData.data.adress.values"
                  placeholder="Название"
                  :input="formData.data.adress"
                  :name="'adress'"
                  :label="'Адрес'"
                  :typeInput="'text'"
                  :minlength="1"
                  :maxlength="1000"
          />
        </div>
        <div class="form__buttons__row">
          <button
                  @click="formReset"
                  class="button__clear"
          >
            Отменить
          </button>
          <button
                  class="button__accept"
                  @click="nextStep"
          >
            Далее
          </button>
        </div>
        </div>
        <div    class="form"
                v-show="step === 'Шаг 2'"
        >
        <allertWarn/>
        <div class="form__checkGrid__upper">
         <div class="form__checkGrid__upper__inputs">
           <div class="form__checkGrid__upper__inputs__header">
             <div>
               <div class="rate-block">
                 <h2 class="rate">{{formData.data.rating.values}}</h2>
               </div>
             </div>
             <div>
               <h1 class="rate__text"
               > {{formData.data.name.values}}
               </h1>
             </div>
           </div>
           <div class="form__checkGrid__upper___inputs__rows">
             <div class="row">
               <div class="svg">
                 <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M6.38506 19.6568C5.25524 18.2015 3.74882 16.3151 2.5652 14.267C1.32779 12.2189 0.359375 9.95517 0.359375 7.90706C0.359375 5.85895 1.22019 3.97253 2.5652 2.62509C3.91022 1.27765 5.79325 0.415283 7.83768 0.415283C9.8821 0.415283 11.7651 1.27765 13.1101 2.62509C14.4552 3.97253 15.316 5.85895 15.316 7.90706C15.316 9.95517 14.3476 12.2189 13.1101 14.267C11.8727 16.3151 10.4201 18.2015 9.2903 19.6568C9.2365 19.7106 9.18269 19.7645 9.12889 19.8184C9.07509 19.8723 9.02129 19.9262 8.96749 19.9801C8.91369 20.034 8.85989 20.0879 8.80609 20.0879C8.75229 20.1418 8.69849 20.1418 8.64469 20.1957C8.59089 20.2496 8.53709 20.2496 8.42948 20.3035C8.37568 20.3035 8.32188 20.3574 8.21428 20.3574C8.16048 20.3574 8.05288 20.3574 7.99908 20.4113C7.94528 20.4113 7.83768 20.4113 7.78388 20.4113C7.73007 20.4113 7.67627 20.4113 7.56867 20.4113C7.51487 20.4113 7.46107 20.4113 7.35347 20.3574C7.29967 20.3574 7.19207 20.3035 7.13827 20.3035C7.08447 20.3035 6.97686 20.2496 6.92306 20.2496C6.86926 20.1957 6.81546 20.1957 6.76166 20.1418C6.70786 20.0879 6.65406 20.034 6.60026 20.034C6.54646 19.9801 6.49266 19.9262 6.43886 19.8723C6.49266 19.7645 6.43886 19.7106 6.38506 19.6568ZM3.69502 13.6202C4.87864 15.5605 6.33126 17.4469 7.46107 18.8483C7.51487 18.9022 7.51487 18.9022 7.62247 18.9561L7.67627 19.01C7.73007 19.01 7.73007 19.01 7.78388 19.0639H7.83768H7.89148H7.94528H7.99908C8.05288 19.0639 8.10668 19.01 8.16048 19.01L8.21428 18.9561L8.26808 18.9022L8.32188 18.8483C9.4517 17.4469 10.9043 15.5605 12.0879 13.6202C13.2177 11.7338 14.0786 9.68568 14.0786 7.90706C14.0786 6.18233 13.3792 4.6732 12.2493 3.54135C11.1195 2.4095 9.6131 1.70883 7.89148 1.70883C6.16985 1.70883 4.66343 2.4095 3.53362 3.54135C2.4038 4.6732 1.70439 6.23623 1.70439 7.90706C1.70439 9.68568 2.5652 11.6799 3.69502 13.6202ZM7.83768 3.64914C8.37568 3.64914 8.85989 3.75694 9.2903 3.91863C9.7745 4.13422 10.2049 4.40371 10.5277 4.7271C10.9043 5.10438 11.1733 5.48166 11.3347 5.96674C11.4961 6.39792 11.6037 6.9369 11.6037 7.42198C11.6037 7.96096 11.4961 8.44604 11.3347 8.87722C11.1195 9.3623 10.8505 9.79348 10.5277 10.1169C10.1511 10.4941 9.7745 10.7636 9.2903 10.9253C8.85989 11.087 8.32188 11.1948 7.83768 11.1948C7.35347 11.1948 6.81546 11.1948 6.38506 10.9792C5.90085 10.7636 5.47044 10.4941 5.14764 10.1708C4.77103 9.79348 4.50203 9.41619 4.34063 8.93112C4.12543 8.44604 4.01782 7.96096 4.01782 7.47588C4.01782 6.9369 4.12543 6.45182 4.28683 6.02064C4.50203 5.53556 4.77103 5.10438 5.14764 4.7271C5.52424 4.34981 5.90085 4.08032 6.38506 3.91863C6.81546 3.75694 7.35347 3.64914 7.83768 3.64914ZM8.80609 5.15828C8.53709 5.05048 8.21428 4.99658 7.83768 4.99658C7.51487 4.99658 7.19207 5.05048 6.86926 5.15828C6.54646 5.26607 6.27745 5.48166 6.06225 5.69725C5.84705 5.91285 5.63185 6.18233 5.52424 6.50572C5.41664 6.77521 5.36284 7.09859 5.36284 7.47588C5.36284 7.79926 5.41664 8.12265 5.52424 8.44604C5.63185 8.76942 5.84705 9.03891 6.06225 9.2545C6.27745 9.47009 6.54646 9.68568 6.86926 9.79348C7.13827 9.90127 7.46107 9.95517 7.83768 9.95517C8.16048 9.95517 8.48328 9.90127 8.80609 9.79348C9.12889 9.68568 9.3979 9.47009 9.6131 9.2545C9.8283 9.03891 10.0435 8.76942 10.1511 8.44604C10.2587 8.17655 10.3125 7.85316 10.3125 7.47588C10.3125 7.15249 10.2587 6.82911 10.1511 6.50572C10.0435 6.18233 9.8283 5.91285 9.6131 5.69725C9.3979 5.42777 9.12889 5.26607 8.80609 5.15828Z" fill="#9B63F8"/>
                 </svg>
               </div>
               <div>
                 <p class="event__descripton">{{formData.data.adress.values}}</p>
               </div>
             </div>
             <div v-for="(events, index) in formData.events"
                  :key="index"
             >
               <div class="row">
                 <div class="svg" style="margin-top: 3px;">
                   <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M6.54011 1.15324H11.0769C11.3715 1.15324 11.6661 1.38388 11.6661 1.72986V2.01817C11.6661 2.30647 11.4305 2.59478 11.0769 2.59478H6.54011C6.24551 2.59478 5.95091 2.36414 5.95091 2.01817V1.72986C6.00983 1.38388 6.24551 1.15324 6.54011 1.15324ZM5.47955 11.1287H6.06875C6.36335 11.1287 6.65795 11.3594 6.65795 11.7054V11.8207C6.65795 12.109 6.42227 12.3973 6.06875 12.3973H5.47955C5.18496 12.3973 4.89036 12.1667 4.89036 11.8207V11.7054C4.89036 11.4171 5.18496 11.1287 5.47955 11.1287ZM8.54339 11.1287H9.13259C9.42719 11.1287 9.72179 11.3594 9.72179 11.7054V11.8207C9.72179 12.109 9.48611 12.3973 9.13259 12.3973H8.54339C8.24879 12.3973 7.95419 12.1667 7.95419 11.8207V11.7054C7.95419 11.4171 8.24879 11.1287 8.54339 11.1287ZM11.6072 11.1287H12.1964C12.491 11.1287 12.7856 11.3594 12.7856 11.7054V11.8207C12.7856 12.109 12.5499 12.3973 12.1964 12.3973H11.6072C11.3126 12.3973 11.018 12.1667 11.018 11.8207V11.7054C11.018 11.4171 11.3126 11.1287 11.6072 11.1287ZM2.41572 1.78752V2.07583C2.41572 2.30647 2.29788 2.53712 2.0622 2.59478C1.70868 2.71011 1.473 3.05608 1.473 3.45971V13.8389C1.473 14.0695 1.59084 14.3001 1.7676 14.4731C1.94436 14.6461 2.18004 14.7614 2.41572 14.7614H15.3192C15.8495 14.7614 16.2619 14.3578 16.2619 13.8389V3.45971C16.2619 3.22906 16.1441 2.99842 15.9673 2.82543C15.9084 2.76777 15.7905 2.65245 15.6727 2.59478C15.437 2.53712 15.3192 2.30647 15.3192 2.07583V1.78752C15.3192 1.61453 15.3781 1.44155 15.5549 1.32622C15.7316 1.2109 15.9084 1.2109 16.0851 1.26856C16.4387 1.38389 16.7333 1.55687 17.0279 1.84518C17.4403 2.24881 17.676 2.82543 17.676 3.45971V13.8389C17.676 15.1651 16.2619 16.203 15.0246 16.203H2.41572C1.7676 16.203 1.1784 15.9147 0.707039 15.511C0.2946 15.0497 0 14.4731 0 13.8389V3.45971C0 2.4218 0.707039 1.55687 1.64976 1.26856C1.82652 1.2109 2.00328 1.2109 2.18004 1.32622C2.29788 1.44155 2.41572 1.61453 2.41572 1.78752ZM8.54339 8.7646H9.13259C9.42719 8.7646 9.72179 8.99525 9.72179 9.34122V9.45655C9.72179 9.74486 9.48611 10.0332 9.13259 10.0332H8.54339C8.24879 10.0332 7.95419 9.80252 7.95419 9.45655V9.34122C7.95419 8.99525 8.24879 8.7646 8.54339 8.7646ZM11.6072 8.7646H12.1964C12.491 8.7646 12.7856 8.99525 12.7856 9.34122V9.45655C12.7856 9.74486 12.5499 10.0332 12.1964 10.0332H11.6072C11.3126 10.0332 11.018 9.80252 11.018 9.45655V9.34122C11.018 8.99525 11.3126 8.7646 11.6072 8.7646ZM5.47955 8.7646H6.06875C6.36335 8.7646 6.65795 8.99525 6.65795 9.34122V9.45655C6.65795 9.74486 6.42227 10.0332 6.06875 10.0332H5.47955C5.18496 10.0332 4.89036 9.80252 4.89036 9.45655V9.34122C4.89036 8.99525 5.18496 8.7646 5.47955 8.7646ZM5.47955 6.34281H6.06875C6.36335 6.34281 6.65795 6.57345 6.65795 6.91943V7.03475C6.65795 7.32306 6.42227 7.61137 6.06875 7.61137H5.47955C5.18496 7.61137 4.89036 7.38072 4.89036 7.03475V6.91943C4.89036 6.63112 5.18496 6.34281 5.47955 6.34281ZM8.54339 6.34281H9.13259C9.42719 6.34281 9.72179 6.57345 9.72179 6.91943V7.03475C9.72179 7.32306 9.48611 7.61137 9.13259 7.61137H8.54339C8.24879 7.61137 7.95419 7.38072 7.95419 7.03475V6.91943C7.95419 6.63112 8.24879 6.34281 8.54339 6.34281ZM11.6072 6.34281H12.1964C12.491 6.34281 12.7856 6.57345 12.7856 6.91943V7.03475C12.7856 7.32306 12.5499 7.61137 12.1964 7.61137H11.6072C11.3126 7.61137 11.018 7.38072 11.018 7.03475V6.91943C11.018 6.63112 11.3126 6.34281 11.6072 6.34281ZM14.1997 0.576619V3.6327C14.1997 3.92101 13.964 4.20932 13.6105 4.20932H13.3159C13.0213 4.20932 12.7267 3.97867 12.7267 3.6327V0.576619C12.7267 0.288309 12.9624 0 13.3159 0H13.6105C13.964 0 14.1997 0.230647 14.1997 0.576619ZM4.89036 0.576619V3.6327C4.89036 3.92101 4.65468 4.20932 4.30116 4.20932H4.06548C3.77088 4.20932 3.47628 3.97867 3.47628 3.6327V0.576619C3.47628 0.288309 3.71196 0 4.06548 0H4.36008C4.65468 0 4.89036 0.230647 4.89036 0.576619Z" fill="#9B63F8"/>
                   </svg>
                 </div>
                 <div>
                   <p class="event__descripton">{{formData.events[index].beginDate}},{{formData.events[index].endDate}}</p>
                 </div>
               </div>
               <div class="row">
                 <div class="svg" style="margin-top: 3px;">
                   <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M14.498 4.86347C14.1624 5.02582 14.022 5.42964 14.1844 5.76506C14.6279 6.68133 14.8527 7.66896 14.8527 8.70159C14.8527 12.4242 11.8241 15.4528 8.10149 15.4528C4.37891 15.4528 1.35025 12.4242 1.35025 8.70159C1.35025 4.97901 4.37891 1.95035 8.10149 1.95035C9.64409 1.95035 11.0932 2.45405 12.2927 3.40691C12.5836 3.63915 13.009 3.59052 13.2412 3.29862C13.4735 3.00688 13.4249 2.58196 13.1328 2.35005C11.7128 1.22149 9.92594 0.600098 8.10149 0.600098C3.63456 0.600098 0 4.23466 0 8.70159C0 13.1685 3.63456 16.8031 8.10149 16.8031C12.5684 16.8031 16.203 13.1685 16.203 8.70159C16.203 7.46375 15.9327 6.2775 15.3996 5.17713C15.2376 4.84089 14.8325 4.70079 14.498 4.86347Z" fill="#9B63F8"/>
                     <path d="M8.10139 3.30054C7.72872 3.30054 7.42627 3.60299 7.42627 3.97566V8.70153C7.42627 9.0742 7.72872 9.37666 8.10139 9.37666H11.477C11.8497 9.37666 12.1521 9.0742 12.1521 8.70153C12.1521 8.32886 11.8497 8.02641 11.477 8.02641H8.77652V3.97566C8.77652 3.60299 8.47406 3.30054 8.10139 3.30054Z" fill="#9B63F8"/>
                   </svg>
                 </div>
                 <div>
                   <p class="event__descripton">{{formData.events[index].beginTime}},{{formData.events[index].endTime}}</p>
                 </div>
               </div>
             </div>
           </div>
           <div style="display: flex; flex-direction: column">
             <h3 class="form__checkGrid__upper___inputs__contacts">Контакты</h3>
             <div class="row">
               <div class="svg">

                 <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M15.8147 14.6201V11.7553C15.8147 11.706 15.8147 11.6566 15.7653 11.6072C15.7159 11.5578 15.7159 11.5578 15.6666 11.5578C14.9751 11.5084 14.333 11.4096 13.7403 11.2614C13.0982 11.1132 12.4561 10.8663 11.8634 10.6193C11.814 10.6193 11.814 10.6193 11.7646 10.6193C11.7152 10.6193 11.7152 10.6193 11.6658 10.6687L11.0731 11.2614C10.8261 11.5084 10.5298 11.6072 10.2334 11.6566C9.93706 11.706 9.59131 11.6072 9.34435 11.459C8.60347 10.9651 7.91198 10.4218 7.31927 9.77966C6.67717 9.13756 6.13386 8.44607 5.63994 7.75458C5.44237 7.50762 5.39298 7.16187 5.44237 6.86552C5.49176 6.56916 5.59055 6.27281 5.83751 6.02585L6.43021 5.43314C6.47961 5.38375 6.47961 5.38375 6.47961 5.33436C6.47961 5.28497 6.47961 5.28497 6.47961 5.23557C6.18325 4.64287 5.98568 4.00077 5.83751 3.35867C5.59055 2.71657 5.44237 2.02508 5.44237 1.38298C5.44237 1.33359 5.44237 1.2842 5.39298 1.2842C5.34358 1.23481 5.29419 1.23481 5.2448 1.23481H2.38005C2.33066 1.23481 2.33066 1.23481 2.33066 1.23481L2.28127 1.2842L2.23188 1.33359V1.38298C2.42944 4.98861 3.9606 8.2485 6.38082 10.6687C8.80104 13.0889 12.0609 14.6201 15.6666 14.8177C15.7159 14.8177 15.7159 14.8177 15.7159 14.8177C15.7159 14.8177 15.7653 14.8177 15.7653 14.7683L15.8147 14.7189C15.8147 14.6695 15.8147 14.6695 15.8147 14.6201ZM17.0001 11.8047V14.6695C17.0001 14.8671 16.9508 15.0646 16.9014 15.2128C16.852 15.361 16.7038 15.5585 16.5556 15.6573C16.4074 15.8055 16.2593 15.9043 16.0617 15.9537C15.8641 16.0031 15.7159 16.0525 15.5184 16.0525C11.6164 15.8549 8.06016 14.1756 5.44237 11.5578C2.87397 8.93999 1.19464 5.38375 0.99707 1.48177C0.99707 1.2842 0.99707 1.08663 1.09585 0.938452C1.14525 0.790275 1.24403 0.592707 1.39221 0.44453C1.49099 0.296353 1.68856 0.197569 1.83674 0.0987844C2.03431 0.0493922 2.18248 0 2.38005 0H5.2448C5.59055 0 5.93629 0.148177 6.18325 0.395138C6.43021 0.642099 6.57839 0.938452 6.62778 1.33359C6.67717 1.8769 6.77596 2.46961 6.92414 3.01292C7.07231 3.60563 7.26988 4.14895 7.51684 4.64287C7.61563 4.88983 7.66502 5.18618 7.61563 5.43314C7.56623 5.6801 7.46745 5.97646 7.22049 6.17403L6.62778 6.76673C6.57839 6.81612 6.57839 6.81612 6.57839 6.86552C6.57839 6.91491 6.57839 6.9643 6.62778 6.9643C7.07231 7.6064 7.56623 8.2485 8.15894 8.79181C8.70225 9.33513 9.34435 9.87844 9.98645 10.323C10.0358 10.3724 10.0852 10.3724 10.0852 10.3724C10.1346 10.3724 10.184 10.3724 10.184 10.323L10.7767 9.73027C10.9743 9.5327 11.2213 9.38452 11.5176 9.33513C11.7646 9.28574 12.0609 9.33513 12.3079 9.43391C12.8512 9.68087 13.3945 9.87844 13.9378 10.0266C14.4811 10.1748 15.0738 10.2736 15.6666 10.323C16.0123 10.3724 16.358 10.5205 16.605 10.7675C16.9014 11.0639 17.0001 11.4096 17.0001 11.8047Z" fill="#9B63F8"/>
                 </svg>

               </div>
               <div>
                 <p class="contact__description">{{formData.data.tel.values}}</p>
               </div>
             </div>
             <div class="row">
               <div class="svg">
                 <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M17 1.06464V12.9886C17 13.5741 16.5263 14.0532 15.9474 14.0532H1.05263C0.473684 14.0532 0 13.5741 0 12.9886V1.06464C0 0.479087 0.473684 0 1.05263 0H15.9474C16.5263 0 17 0.479087 17 1.06464ZM14.6316 12.7224L10.5789 6.4943H6.42105L2.36842 12.7224H14.6316ZM1.31579 11.9772L5.26316 5.90875L1.31579 1.49049V11.9772ZM11.7368 5.90875L15.6842 11.9772V1.49049L11.7368 5.90875ZM14.1053 1.3308H2.89474L6.36842 5.21673H10.6316L14.1053 1.3308Z" fill="#9B63F8"/>
                 </svg>
               </div>
               <div>
                 <p class="contact__description">{{formData.data.email.values}}</p>
               </div>
             </div>
           </div>
           <div style="display: flex; flex-direction: column">
             <div><p class="org">{{formData.data.org.values}}</p></div>
             <div><p class="org__desсription">Организатор мероприятия</p></div>
           </div>
         </div>
          <div>
           <img class="image"
                   :src="formData.url"
           />
          </div>
        </div>
          <div class="form__checkGrid__bottom">
            <p class="description">{{formData.data.descr.values}}</p>
          </div>
          <div class="form__buttons__row__step2">
            <button
                    @click="step ='Шаг 1'"
                    class="button__clear"
            >
              Назад
            </button>
            <button
                    class="button__accept"
                    value="submit"
            >
              Отправить на модерацию
            </button>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import EventRow from '@/components/EventRow'
import allertWarn from '@/components/allertWarn'
import MyPhoto from '../components/UI/MyPhotoUp'
export default {
  name: 'HomeView',
  components: {
    MyPhoto,
    EventRow,
    allertWarn
  },
  data () {
    return {
      formData: {
        data: {
          org: { id: 0, label: 'Организатор', values: '' },
          tel: { id: 1, label: 'Телефон', values: '' },
          email: { id: 2, label: 'Email', values: '' },
          city: { id: 3, label: 'Город организатора', values: '' },
          name: { id: 4, label: 'Название', values: '' },
          descr: { id: 5, label: 'Подробное описание', values: '' },
          rating: { id: 6, label: 'Рейтинг', values: '' },
          adress: { id: 7, label: 'Адрес', values: '' }

        },
        events: [
          { id: 0, beginDate: '', beginTime: '', endDate: '', endTime: '' }
        ],
        url: ''
      },
      step: 'Шаг 1'
    }
  },
  /* validations:{
    }, */
  methods: {
    addDate () {
      const id = this.formData.events.length
      const eventArea = { id: id, beginDate: '', beginTime: '', endDate: '', endTime: '' }
      this.formData.events.push(eventArea)
    },
    removeDate (input) {
      this.formData.events = this.formData.events.filter(p => p.id !== input.id)
    },
    nextStep () {
      if (document.getElementById('form').checkValidity() === true) {
        // Деактивировать для работы со store
        this.step = 'Шаг 2'
        // Активировать для работы со store
        /* this.$store.state.url = this.url;
              this.$store.state.formData = this.formData;
              this.$router.push('/about'); */
      }
    },
    formReset () {
      document.getElementById('form').reset()
      this.formData = {
        data: [
          { id: 0, label: 'Организатор', values: '' },
          { id: 1, label: 'Телефон', values: '' },
          { id: 2, label: 'Email', values: '' },
          { id: 3, label: 'Город организатора', values: '' },
          { id: 4, label: 'Название', values: '' },
          { id: 5, label: 'Подробное описание', values: '' },
          { id: 6, label: 'Рейтинг', values: '' },
          { id: 7, label: 'Адрес', values: '' }
        ],
        events: [
          { id: 0, beginDate: '', beginTime: '', endDate: '', endTime: '' }
        ],
        url: null
      }
    },
    removePhoto () {
      this.formData.url = null
    }

  }

}
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.home{
  position: inherit;
  background-color: transparent;
  .step{
    color: #351768 !important;
    font-weight: 800;
    font-size: 40px;
    line-height: 49px;
  }
}
.form{
  position: inherit;
  padding-right: 2.5%;
  padding-left: 2.5%;
  background: #FFFFFF;
  border-radius: 4px;
  width: 60vw;
  height: max-content;
  display: flex;
  flex-direction: column;
  box-sizing: inherit;
  margin-top: 2.06%;
  padding-bottom: 4%;
  .form__parts__barrier{
    margin-top: 4%;
    margin-bottom: 4%;
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    text-align: left;
    vertical-align: top;
  }
}
.contacts-row{
  display: grid;
  grid-template-columns: 31% 31% 34%;
}
.contacts-row:not(:last-child){
  gap: 2%;
}
.date__and__rating{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 4vh;
  margin-bottom: 4vh;
}
.btn__date__add{
  width: 182px;
  height: 58px;
  margin-top: 4vh;
  margin-bottom: 2.6%;
  border: 1px solid #9B63F8;
  border-radius: 4px;
  background-color: white;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
}
.btn__date__add:hover{
  width: 182px;
  height: 58px;
  margin-top: 4vh;
  margin-bottom: 2.6%;
  border: 1px solid white;
  border-radius: 4px;
  background-color: #9B63F8;
  color: white;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
}
.form__buttons__row{
  display: flex;
  flex-direction: row;
  .button__accept{
    width: 285px;
    height: 58px;
    background: #9B63F8;
    border-radius: 4px;
    color: white;
    border: 1px solid #9B63F8;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }
  .button__clear{
    width: 285px;
    height: 58px;
    background: white;
    border-radius: 4px;
    color: #211536;
    border: 1px solid #9B63F8;
    margin-right: 20px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }
}
.form__buttons__row__step2{
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  .button__accept{
    width: 285px;
    height: 58px;
    background: #9B63F8;
    border-radius: 4px;
    color: white;
    border: 1px solid #9B63F8;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }
  .button__clear{
    width: 285px;
    height: 58px;
    background: white;
    border-radius: 4px;
    color: #211536;
    border: 1px solid #9B63F8;
    margin-right: 20px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }
}
  .form__checkGrid__upper{
    margin-top: 60px;
    display: grid;
    grid-template-columns: 40% 60%;
    height: min-content;
    .form__checkGrid__upper__inputs{
      display: flex;
      flex-direction: column;
      .form__checkGrid__upper__inputs__header{
        display: flex;
        flex-direction: row;
        .rate-block{
          display: flex;
          background-color: #351767;
          width: 40px;
          height: 40px;
          margin-top: 8px;
          margin-right: 16px;
        }
      }
    }
    .form__checkGrid__upper___inputs__rows{
      margin-top: 15px !important;
    }
    .row{
      margin-top: 19px;
      display: flex;
      flex-direction: row;
      .event__descripton{
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #211536;
        opacity: 0.6;
      }
      .contact__description{
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #211536;
        opacity: 0.6;
      }
      .svg{
        margin-left: 60px;
        margin-right: 15px;
      }
    }
    .form__checkGrid__upper___inputs__contacts{
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #211536;
      margin-left: 60px;
      margin-top: 23px;
      margin-bottom: 13px;
    }
    .org{
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #211536;
      margin-left: 60px;
      margin-top: 25px;
    }
    .org__desсription{
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;
      display: flex;
      align-items: center;
      color: #8E69CC;
      margin-left: 60px;
    }
  }
  .rate{
    margin: auto;
    color: white;
  }
  .rate__text{
    font-weight: 800;
    font-size: 32px;
    line-height: 39px;
    color: #351768;
  }
  .image{
    object-fit: cover;
    width: 100%;
    height: 55vh;
    border-radius: 4px;
  }
  .form__checkGrid__bottom{
    margin-left: 34px;
    margin-right: 34px;
    margin-top: 34px;
    p{
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #211536;
    }
  }
</style>
