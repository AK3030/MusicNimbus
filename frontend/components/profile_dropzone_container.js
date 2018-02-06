import { connect } from 'react-redux';
import { uploadImage } from '../util/file_upload_api_util';
import ProfileDropzone from '../profile_dropzone';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    image_type: ownProps.image_type
  };
};

export default connect(mapStateToProps, null)(ProfileDropzone);
