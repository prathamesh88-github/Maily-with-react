import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter} from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview= ({onCancel,formValues,submitSurvey,history})  => {
    const reviewFields=_.map(formFields,({name,label})=>{
        return(
            <div key={name}>
                <label>{label}</label>
        <div>{formValues[name]}</div>
            </div>
        );
    }
    
    );
    return(
        <div>
       <h5> PLEASE CONFIRM YOUR ENTRIES</h5>
       {reviewFields}

       <button onClick={onCancel} className="yellow darken-3 btn-flat white-text left">Back</button>
       <button onClick={()=>submitSurvey(formValues,history)} className="green btn-flat white-text right">send survey</button>
        
        </div>
    );
} ;
function mapStateToProps(state){
    return {formValues:state.form.surveyForm.values};
        
}
export default connect(mapStateToProps,actions)(withRouter(SurveyFormReview));