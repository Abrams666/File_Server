const app = Vue.createApp({
	data() {
		return {
			err_str: "",
			pwd: "",
		};
	},
	methods: {
		login() {
			fetch("/logindata", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					pwd: this.pwd,
				}),
			}).then((res) => {
				if (res.status === 200) {
					window.location.href = "/user";
				} else if (res.status === 403) {
					this.err_str = "Wrong password.";
				} else {
					window.location.href = "/";
				}
			});
		},
	},
});
app.mount("#login_formId");
