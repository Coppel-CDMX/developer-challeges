import { mapState } from "vuex";

export default {
    computed: {
        ...mapState({
            user: state => state.user.user
        })
    }
};
