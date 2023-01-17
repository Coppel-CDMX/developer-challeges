<template>
    <div>
        <div class="container">
            <slot></slot>
        </div>

        <nav v-if="pages.length > 1 && paginate === true">
            <ul class="pagination justify-content-center align-items-center mt-4 mb-4">
                <li class="pagination-previous" v-bind:class="{ disabled: !showPrevButton }">
                    <a href="#" @click.stop.prevent="$emit('page-selected', currentPage - 1)" v-if="showPrevButton">Anterior</a>
                    <template v-else>Anterior</template>
                </li>

                <li v-bind:class="classesPage(page)" v-for="page in pages" :key="page">
                    <a v-if="page !== '...'" href="#" @click.stop.prevent="$emit('page-selected', page)" :aria-label="`Page ${page}`">{{ page | formatNumber }}</a>
                </li>

                <li class="pagination-next" v-bind:class="{ disabled: !showNextButton }">
                    <a href="#" @click.stop.prevent="$emit('page-selected', currentPage + 1)" v-if="showNextButton">Siguiente</a>
                    <template v-else>Siguiente</template>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Table",
    props: {
        params: {},
        paginate: {
            type: Boolean,
            required: false,
            default: true,
        }
    },
    computed: {
        totalPages() {
            return this.params.last_page || 0;
        },
        currentPage() {
            return this.params.current_page || 0;
        },
        totalPages() {
            return this.params.last_page || 0;
        },
        pages() {
            const delta = 2;
            const left = this.currentPage - delta;
            const right = this.currentPage + delta + 1;
            const range = [];
            const rangeWithDots = [];
            let l;

            for (let page = 1; page <= this.totalPages; page++) {
                if (page === 1 || page === this.totalPages || (page >= left && page < right)) {
                    range.push(page);
                }
            }

            for (let page of range) {
                if (l) {
                    if (page - l === 2) {
                        rangeWithDots.push(l + 1);
                    } else if (page - l !== 1) {
                        rangeWithDots.push("...");
                    }
                }

                rangeWithDots.push(page);
                l = page;
            }

            return rangeWithDots;
        },
        showNextButton() {
            return this.currentPage < this.totalPages;
        },
        showPrevButton() {
            return this.currentPage > 1;
        },
    },
    methods: {
        classesPage(page) {
            return {
                current: this.currentPage === page,
                ellipsis: page === '...'
            };
        },
    }
};
</script>

<style lang="scss">
    $white: #fff;
    $blue: skyblue;

    .pagination {
        a {
            text-decoration: none;

            &:hover {
                color: $blue;
            }
        }

        li {
            margin: 0 5px;
        }

        .current {
            padding: 3px 10px;
            color: $blue;
            cursor: default;
            background: $white;
            border-radius: 50%;
            border: 2px solid $blue;
        }

        .pagination-previous,
        .pagination-next {
            font-size: 14px;
        }

        .disabled {
            opacity: 0.5;
        }
    }
</style>
